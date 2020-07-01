export interface IKeyInput {
  key: string;
}

export interface IKeyPressAction {
  type: string;
  key?: string;
  keybinds?: object;
}
