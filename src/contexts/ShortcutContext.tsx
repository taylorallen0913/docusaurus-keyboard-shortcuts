import React, { createContext, useReducer } from 'react';
import { useKeyboardShortcut } from '../hooks/useKeyboardShortcut';
import Modal from '../components/Modal'

export const ModalStateContext = createContext<any>(null);
export const ShortcutContext = createContext<any>(null);

const modalReducer = (state: any, value: any) => value;

export function ShortcutContextProvider({ children }: any) {
  const [isModalVisible, setIsModalVisible] = useReducer(modalReducer, false);

  const keybinds: any = [
    {
      name: "hidden",
      contents: {
        modal: {
          hidden: true,
          keyCombo: [['Shift ?'].toString()],
          action: () => setIsModalVisible(true)
        },
        closeModal: {
          hidden: true,
          keyCombo: ['Escape'],
          action: () => setIsModalVisible(false)
        }
      }
    },
    {
      name: 'General',
      contents: {
        alert: {
          hidden: false,
          name: "Alert",
          description: "Alerts user",
          keyCombo: [['Shift M'].toString()],
          action: () => alert('Alert!')
        },
        devtools: {
          hidden: false,
          name: "Devtools",
          description: "Opens devtools in browser",
          keyCombo: [['Shift T'].toString()],
          action: () => alert('Devtools!')
        }
      }
    },
    {
      name: "Default Plugin",
      contents: {
        play: {
          hidden: false,
          name: "Play",
          description: "Plays game",
          keyCombo: [['Shift Z'].toString()],
          action: () => alert('Play!')
        }
      }
    }
  ]

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
