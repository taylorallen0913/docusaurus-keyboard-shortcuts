import React, { useState, useEffect } from 'react';

const parseKeyCombo = (keyCombo: string) => keyCombo.split(' ').join(" + ");

const KeybindDisplay = ({ name, keyCombos }: any) => {
    return (
        <div className="shortcuts-content-container">
            <h1 className="shortcuts-title">{name}</h1>
            <div className="shortcuts-spacing" />
            {
                keyCombos.map((combo: any) => (
                    <p className="shortcuts-key-combo" key={combo.toString()}>
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

    useEffect(() => {
        delete keybinds.modal;
        splitInput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Removed keybinds with hidden property
    const filterKeybinds = (): object[] => {
        let filteredKeybinds: object[] = [];
        Object.keys(keybinds).forEach((keybindName: any) => {
            if (keybinds[keybindName].hidden === false) {
                filteredKeybinds[keybindName] = keybinds[keybindName];
            }
        })

        return filteredKeybinds;
    }

    const splitInput = () => {
        let filteredKeybinds: object[] = filterKeybinds();
        let colOneList: object[] = [];
        let colTwoList: object[] = [];
        Object.values(filteredKeybinds).forEach((keybind: any, i) => {
            if (i % 2 === 0) colOneList.push(keybind);
            else if (i % 2 === 1) colTwoList.push(keybind);
        })
        setColOneList(colOneList);
        setColTwoList(colTwoList);
    }


    return (
        <div className="shortcuts-modal-container">
            <div className="shortcuts-modal-background" />
            <div className="shortcuts-modal-content">
                <div className="card">
                    <div className="card__header shortcuts-header-container">
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
                    </div>
                    <div className="card__footer shortcuts-footer">
                        <ul className="pagination">
                            <li className="pagination__item disabled">
                                <a className="pagination__link" href="#url">
                                    «
                                </a>
                            </li>
                            <li className="pagination__item pagination__item--active">
                                <a className="pagination__link" href="#url">
                                    1
                                    </a>
                            </li>
                            <li className="pagination__item">
                                <a className="pagination__link" href="#url">
                                    2
                                </a>
                            </li>
                            <li className="pagination__item">
                                <a className="pagination__link" href="#url">
                                    3
                                </a>
                            </li>
                            <li className="pagination__item">
                                <span>...</span>
                            </li>
                            <li className="pagination__item">
                                <a className="pagination__link" href="#url">
                                    »
                                </a>
                            </li>
                        </ul>
                        <div>
                            <button
                                className="button button--secondary button--block shortcuts-dismiss-button"
                                onClick={() => setIsModalVisible(false)}>
                                Dismiss
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;