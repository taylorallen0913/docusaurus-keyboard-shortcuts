import React, { useContext } from 'react';
import { ShortcutContext, ShortcutContextProvider } from './contexts/ShortcutContext';

const App = () => {
  const shortcut = useContext(ShortcutContext);

  return (
    <ShortcutContextProvider>
      <h1>Hello world</h1>
    </ShortcutContextProvider>
  )
};

export default App;
