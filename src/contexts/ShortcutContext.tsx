import React, { createContext, useState } from 'react';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';
import Modal from '../components/Modal'

export const ShortcutContext = createContext('hello');

export const ShortcutContextProvider = ({ children }: any) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const keyboardShortcut = useKeyboardShortcut();

  return (
    <ShortcutContext.Provider value={"yes"}>
      <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      {children}
    </ShortcutContext.Provider>
  );
};
