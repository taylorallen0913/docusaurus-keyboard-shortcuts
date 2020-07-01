import React, { useState, useEffect } from 'react';
import ModalTabBody from '../ModalTabBody';
import clsx from 'clsx';

import styles from './styles.module.css';

const parseKeyCombo = (keyCombo: string) => keyCombo.split(' ').join(" + ");

function KeybindDisplay({ name, keyCombos }: any) {
    console.log(keyCombos)
    return (
        <div className={styles.contentContainer}>
            <h1 className={styles.shortcutsTitle}>{name}</h1>
            <div className={styles.shortcutsSpacing} />
            {/* {
                keyCombos.map((combo: any) => (
                    <p className={styles.shortcutsKeyCombo} key={combo.toString()}>
                        {parseKeyCombo(combo)}
                    </p>
                ))
            } */}
        </div>
    );
}

function Modal({ setIsModalVisible, keybinds }: any): JSX.Element {
    const [keybindData, setKeybindData] = useState<any>();
    const [activeTab, setActiveTab] = useState<number>(0);


    useEffect(() => {
        const filteredKeybindData = filterKeybinds();
        setKeybindData(filteredKeybindData);
        renderModalTabs(filteredKeybindData);
        console.log(filteredKeybindData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Removed keybinds with hidden property and filter data
    function filterKeybinds() {
        let filteredKeybinds: object[] = [];
        keybinds.forEach((section: any) => {
            if (section.name !== 'hidden') {
                filteredKeybinds.push(section);
            }
        })
        return filteredKeybinds;
    }

    function renderModalTabs(filteredKeybindData: any) {
        let modalTabs: any = [];
        Object.values(filteredKeybindData).forEach((keybind: any, i: number) => {
            modalTabs.push(
                <li onClick={() => {
                    console.log(i);
                    setActiveTab(i);
                }} className={clsx('pills__item', styles.shortcutsPillItem, { 'pills__item--active': i === activeTab })} key={i}>
                    {keybind.name}
                </li>
            )
        })
        return modalTabs;
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
                        {
                            keybindData ?
                                <ul className={clsx("pills pills--block", styles.shortcutsPills)}>{renderModalTabs(keybindData)}</ul> : null
                        }
                    </div>
                    <div className={styles.shortcutsBodyContainer}>
                        {
                            keybindData ? <ModalTabBody keybindData={keybindData[activeTab]} /> : null
                        }

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