import React, { useContext } from 'react';
import { ShortcutContext } from './contexts/ShortcutContext';
import useKeyboardShortcut from './hooks/useKeyboardShortcut';

const App = () => {
  const keyboardShortcut = useKeyboardShortcut();
  const shortcut = useContext(ShortcutContext);
  console.log(shortcut);
  return <h1>Hello world</h1>;
};

export default App;
