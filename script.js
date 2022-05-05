const keyboard = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], 
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.prepend(wrapper);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';

const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard-wrapper';

const text = document.createElement('div');
text.innerHTML = '<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: ctrl + alt</p>'

wrapper.appendChild(textarea);
wrapper.appendChild(keyboardWrapper);
wrapper.appendChild(text);

for (let row of keyboard) {
  let keyboardRow = document.createElement('div');
  keyboardRow.className = 'keyboard-row';
  for (let key of row) {
    let keyboardKey = document.createElement('button');
    keyboardKey.className = `key ${key}`;
    keyboardRow.appendChild(keyboardKey);
  }
  keyboardWrapper.appendChild(keyboardRow);
}