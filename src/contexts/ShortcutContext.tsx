import React, { createContext, useReducer, useState, useEffect } from 'react';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';
import Modal from '../components/Modal'

export const ModalStateContext = createContext<any>(null);
export const ShortcutContext = createContext<any>(null);

const modalReducer = (state: any, value: any) => value;

export const ShortcutContextProvider = ({ children }: any) => {
  const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);

  const keybinds: any = {
    modal: {
      keyCombo: [['Shift ?'].toString()],
      action: () => setIsModalVisible(true)
    },
    alert: {
      keyCombo: [['Shift M'].toString()],
      action: () => alert('Alert!')
    }
  };

  // keybinds[['Shift ?'].toString()] = () => setIsModalVisible(true)
  // keybinds[['Shift M'].toString()] = () => alert('Alert!')

  console.log(keybinds)

  const keyboardShortcut = useKeyboardShortcut(keybinds);

  return (
    <ShortcutContext.Provider value={{ isModalVisible, setIsModalVisible }}>
      {
        isModalVisible && <Modal setIsModalVisible={setIsModalVisible} keybinds={keybinds} />
      }
      {children}
    </ShortcutContext.Provider>
  );
};
