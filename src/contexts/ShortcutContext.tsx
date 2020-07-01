import React, { createContext, useReducer, useState, useEffect } from 'react';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';
import Modal from '../components/Modal'

export const ModalStateContext = createContext<any>(null);
export const ShortcutContext = createContext<any>(null);

const modalReducer = (state: any, value: any) => value;

export const ShortcutContextProvider = ({ children }: any) => {
  const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);

  let keybinds: any = {};
  // Modal
  keybinds[['Shift ?', 'Shift ~'].toString()] = () => setIsModalVisible(true);
  // Alert
  keybinds[['Shift M'].toString()] = () => alert('Alert!');

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
