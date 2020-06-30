import React, { createContext, useState, ElementType } from 'react';

export const ShortcutContext = createContext('hello');

// export const ShortcutContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   return (
//     <ShortcutContext.Provider value={theme}>
//       {children}
//     </ShortcutContext.Provider>
//   );
// };
