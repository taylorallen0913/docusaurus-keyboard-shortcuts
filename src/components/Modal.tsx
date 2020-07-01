import React, { useState, useEffect } from 'react';

import './Modal.css'

const parseKeyCombo = (keyCombo: string) => {
    return keyCombo.split(' ').join(" + ")
}

const KeybindDisplay = ({ name, keyCombos }: any) => {
    return (
        <div>
            <h1 className="shortcuts-title">{name}</h1>
            {
                keyCombos.map((combo: any) => (
                    <p className="shortcuts-key-combo">
                        {parseKeyCombo(combo)}
                    </p>
                ))
            }
        </div>
    );
}

const Modal = ({ setIsModalVisible, keybinds }: any) => {
    const [colOneList, setColOneList] = useState<any>();
    const [colTwoList, setColTwoList] = useState<any>();
    const [colThreeList, setColThreeList] = useState<any>();

    useEffect(() => {
        delete keybinds.modal;
        console.log(keybinds)
        splitInput();
    }, []);

    const splitInput = () => {
        let colOneList: object[] = [];
        let colTwoList: object[] = [];
        let colThreeList: object[] = [];
        Object.values(keybinds).forEach((keybind: any, i) => {
            if (keybind.hidden === false) {
                if (i % 3 === 0) colOneList.push(keybind);
                else if (i % 3 === 1) colTwoList.push(keybind);
                else colThreeList.push(keybind)
            }
        })
        setColOneList(colOneList);
        setColTwoList(colTwoList);
        setColThreeList(colThreeList);
    }


    return (
        <div className="card-modal-container">
            <div className="card-modal-background" />
            <div className="card-modal-content">
                <div className="card">
                    <div className="card__header">
                        <h1 className="shortcuts-header">Docusaurus Keyboard Shortcuts</h1>

                    </div>
                    <div className="card__body row">
                        <div className="col shortcuts-container">
                            {
                                colOneList &&
                                colOneList.map((keybind: any) => (
                                    <KeybindDisplay
                                        key={keybind.name.toString()}
                                        name={keybind.name}
                                        keyCombos={keybind.keyCombo}
                                    />
                                ))
                            }
                        </div>
                        <div className="col shortcuts-container">
                            {
                                colTwoList &&
                                colTwoList.map((keybind: any) => (
                                    <KeybindDisplay
                                        key={keybind.name.toString()}
                                        name={keybind.name}
                                        keyCombos={keybind.keyCombo}
                                    />
                                ))
                            }
                        </div>
                        <div className="col shortcuts-container">
                            {
                                colThreeList &&
                                colThreeList.map((keybind: any) => (
                                    <KeybindDisplay
                                        key={keybind.name.toString()}
                                        name={keybind.name}
                                        keyCombos={keybind.keyCombo}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="card__footer">
                        <button
                            className="button button--secondary button--block"
                            onClick={() => setIsModalVisible(false)}>
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;