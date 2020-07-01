import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

function ModalTabBody({ keybindData }: any) {

    console.log(keybindData);

    const [colOneList, setColOneList] = useState<any>();
    const [colTwoList, setColTwoList] = useState<any>();

    function splitInput() {
        // let filteredKeybinds: object[] = filterKeybinds();
        // let colOneList: object[] = [];
        // let colTwoList: object[] = [];
        // Object.values(filteredKeybinds).forEach((keybind: any, i) => {
        //     if (i % 2 === 0) colOneList.push(keybind);
        //     else if (i % 2 === 1) colTwoList.push(keybind);
        // })
        // setColOneList(colOneList);
        // setColTwoList(colTwoList);
        // console.log(colOneList);
        // console.log(colTwoList);
    }

    return (
        <div className="card__body row">
            {/* <div className={clsx('col', styles.shortcutsContainer)}>
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
            </div> */}
        </div>
    )
}

export default ModalTabBody;