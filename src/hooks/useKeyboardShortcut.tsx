import React, { useEffect } from 'react';
import { IKey } from '../interfaces/index'

const useKeyboardShortcut = () => {
    const onKeyDown = ({ key }: IKey) => {
        console.log('key down');
        console.log(key);
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);

        return document.removeEventListener('keyup', onKeyDown, false);
    }, []);
};

export default useKeyboardShortcut;
