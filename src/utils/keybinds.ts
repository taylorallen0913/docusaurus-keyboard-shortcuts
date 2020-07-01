export const checkKeybinds = (state: Set<string>, keybinds: any) => {
  Object.values(keybinds).forEach((keybind: any) => {
    const parsedKeybinds = keybind.keyCombo[0].split(',');
    const parsedState = Array.from(state).toString().split(',').join(' ');
    parsedKeybinds.forEach((parsedKeybind: any) => {
      if (parsedKeybind.split(' ').length === state.size) {
        if (parsedKeybind === parsedState) {
          keybind.action();
        }
      }
    });
  });
};
