import { useEffect, useReducer } from 'react';
import { IKeyInput, IKeyPressAction } from '../interfaces'
import { checkKeybinds } from '../utils/keybinds'

/**
 * TODO:
 * Fix bug with keyboard shortcuts where if you 
 * leave page shortcuts dont work until you refresh
 */

// Created a reducer over state because reducer doesn't rerender component on changes
const keyPressListReducer = (state: Set<string>, action: IKeyPressAction): any => {
    switch (action.type) {
        case 'add':
            return state.add(action.key!);
        case 'remove':
            state.delete(action.key!);
            return state;
        case 'clear':
            state.clear();
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
        checkKeybinds(keyPressList, keybinds, setKeyPressList);
    }

    // Triggers every time a key is let go
    const onKeyUp = ({ key }: IKeyInput) => {
        setKeyPressList({ type: 'remove', key });
    };

    useEffect(() => {
        console.log(keyPressList)
    }, [keyPressList])

    // Adds keyboard event listeners and cleans them up
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('keyup', onKeyUp, true)

        return () => {
            setKeyPressList({ type: 'clear' })
            document.removeEventListener('keydown', onKeyDown, true);
            document.removeEventListener('keyup', onKeyUp, true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

};
