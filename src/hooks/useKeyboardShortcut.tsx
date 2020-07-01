import { useEffect, useReducer } from 'react';
import { IKeyInput, IKeyPressAction } from '../interfaces'
import { checkKeybinds } from '../utils/keybinds'

// Created a reducer over state because reducer doesn't rerender component on changes
const keyPressListReducer = (state: Set<string>, action: IKeyPressAction): any => {
    switch (action.type) {
        case 'add':
            return state.add(action.key!);
        case 'remove':
            state.delete(action.key!);
            return state;
        default:
            return state;
    }
}

export const useKeyboardShortcut = (keybinds: any) => {

    const [keyPressList, setKeyPressList] = useReducer(keyPressListReducer, new Set<string>());

    // Checks if key press set contains the input key
    const isKeyInList = (key: string) => keyPressList.has(key)


    // Triggers every time a key is pressed
    const onKeyDown = ({ key }: IKeyInput) => {
        if (isKeyInList(key)) return;

        setKeyPressList({ type: 'add', key });

        // Checks if a keybind is pressed
        checkKeybinds(keyPressList, keybinds);
    }

    // Triggers every time a key is let go
    const onKeyUp = ({ key }: IKeyInput) => {
        setKeyPressList({ type: 'remove', key });
    };

    // Adds keyboard event listeners and cleans them up
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('keyup', onKeyUp, true)

        return () => {
            document.removeEventListener('keydown', onKeyDown, true);
            document.removeEventListener('keyup', onKeyUp, true)
        }
    }, []);

};
