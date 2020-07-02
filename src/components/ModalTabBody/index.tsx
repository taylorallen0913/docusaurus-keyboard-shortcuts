import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

const parseKeyCombo = (keyCombo: string) => keyCombo.split(' ').join(" + ");

function KeybindDisplay({ name, keyCombos }: any) {
    return (
        <div className={styles.shortcutsContentContainer}>
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

function ModalTabBody({ keybindData }: any) {


    const [colOneList, setColOneList] = useState<any>();
    const [colTwoList, setColTwoList] = useState<any>();

    useEffect(() => {
        splitInput();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keybindData])

    function splitInput() {
        let colOneList: object[] = [];
        let colTwoList: object[] = [];
        Object.values(keybindData.contents).forEach((keybind: any, i: number) => {
            if (i % 2 === 0) colOneList.push(keybind);
            else if (i % 2 === 1) colTwoList.push(keybind);
        })
        setColOneList(colOneList);
        setColTwoList(colTwoList);
    }

    return (
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
    )
}

export default ModalTabBody;