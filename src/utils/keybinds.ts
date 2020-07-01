export const checkKeybinds = (state: Set<string>, keybinds: any) => {
  // Iterate through each keybind
  Object.keys(keybinds).forEach((keybind) => {
    const parsedKeybinds = keybind.split(',');
    const parsedState = Array.from(state).toString().split(',').join(' ');
    parsedKeybinds.forEach((parsedKeybind) => {
      // If singular keybind and input are same length
      if (parsedKeybind.split(' ').length === state.size) {
        // If keybind is the same as input
        if (parsedKeybind === parsedState) {
          // Execute keybind action
          keybinds[keybind]();
        }
      }
    });
  });
};
