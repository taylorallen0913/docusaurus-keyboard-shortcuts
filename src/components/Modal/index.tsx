import React, { useState, useEffect } from 'react';
import clsx from 'clsx'

import styles from './styles.module.css';

const parseKeyCombo = (keyCombo: string) => keyCombo.split(' ').join(" + ");

function KeybindDisplay({ name, keyCombos }: any) {
    return (
        <div className={styles.contentContainer}>
            <h1 className={styles.shortcutsTitle}>{name}</h1>
            <div className={styles.shortcutsSpacing} />
            {
                keyCombos.map((combo: any) => (
                    <p className={styles.shortcutsKeyCombo} key={combo.toString()}>
                        {parseKeyCombo(combo)}
                    </p>
                ))
            }
        </div>
    );
}

function Modal({ setIsModalVisible, keybinds }: any): JSX.Element {
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
        <div className={styles.shortcutsModalContainer}>
            <div className={styles.shortcutsModalBackground} />
            <div className={styles.shortcutsModalContent}>
                <div className="card card--full-height">
                    <div className={clsx("card__header", styles.shortcutsHeaderContainer)}>
                        <h1 className={styles.shortcutsHeader}>Docusaurus Keyboard Shortcuts</h1>
                    </div>
                    <div>
                        <ul className={clsx("pills pills--block", styles.shortcutsPills)}>
                            <li className={clsx('pills__item pills__item--active', styles.shortcutsPillItem)}>General</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Beta</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Gamma</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Zeta</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Zeta</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Zeta</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Zeta</li>
                            <li className={clsx('pills__item', styles.shortcutsPillItem)}>Zeta</li>
                        </ul>
                    </div>
                    <div className={styles.shortcutsBodyContainer}>
                        <div className="card__body row">
                            <div className={clsx('col', styles.shortcutsContainer)}>
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
                            <div className={clsx('col', styles.shortcutsContainer)}>
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
                        <div className="card__footer">
                            <div>
                                <button
                                    className={clsx('button button--primary button--block', styles.shortcutsDismissButton)}
                                    onClick={() => setIsModalVisible(false)}>
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;