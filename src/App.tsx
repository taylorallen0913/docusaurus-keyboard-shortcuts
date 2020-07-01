import React, { useContext } from 'react';
import { ShortcutContext, ShortcutContextProvider } from './contexts/ShortcutContext';

const App = () => {
  const shortcut = useContext(ShortcutContext);

  return (
    <ShortcutContextProvider>
    </ShortcutContextProvider>
  )
};

export default App;
