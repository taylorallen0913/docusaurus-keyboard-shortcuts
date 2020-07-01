import React, { createContext, useReducer } from 'react';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';
import Modal from '../components/Modal'

export const ModalStateContext = createContext<any>(null);
export const ShortcutContext = createContext<any>(null);

const modalReducer = (state: any, value: any) => value;

export const ShortcutContextProvider = ({ children }: any) => {
  const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);

  const keybinds: any = {
    modal: {
      hidden: true,
      keyCombo: [['Shift ?'].toString()],
      action: () => setIsModalVisible(true)
    },
    alert: {
      hidden: false,
      name: "Alert user",
      keyCombo: [['Shift M'].toString()],
      action: () => alert('Alert!')
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const keyboardShortcut = useKeyboardShortcut(keybinds);

  return (
    <ShortcutContext.Provider value={{ isModalVisible, setIsModalVisible }
    }>
      {
        isModalVisible && <Modal setIsModalVisible={setIsModalVisible} keybinds={keybinds} />
      }
      {children}
    </ShortcutContext.Provider >
  );
};
