import React from 'react';
import { ShortcutContextProvider } from './contexts/ShortcutContext';

import "./App.css"

const App = () => {

  return (
    <ShortcutContextProvider>
      <h1 className="header">Press ? to get started!</h1>
    </ShortcutContextProvider>
  )
};

export default App;
