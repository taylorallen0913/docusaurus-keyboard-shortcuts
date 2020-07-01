export const checkKeybinds = (
  state: Set<string>,
  allKeybinds: any,
  setKeyPressList: any,
) => {
  allKeybinds.forEach((section: any) => {
    const keybindsPerSection: any = Object.values(section)[1];
    Object.values(keybindsPerSection).forEach((keybind: any) => {
      const parsedKeybinds = keybind.keyCombo[0].split(',');
      const parsedState = Array.from(state).join(' ');
      parsedKeybinds.forEach((parsedKeybind: any) => {
        if (parsedKeybind.split(' ').length === state.size) {
          if (parsedKeybind === parsedState) {
            keybind.action();
            setKeyPressList({ type: 'clear' });
          }
        }
      });
    });
  });
};
