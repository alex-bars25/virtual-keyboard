const keyboard = [
[ {code: "Backquote", default: "`", upperDefault: "~", additional: "ё"},
  {code: "Digit1", default: "1"},
  {code: "Digit2", default: "2"},
  {code: "Digit3", default: "3"},
  {code: "Digit4", default: "4"},
  {code: "Digit5", default: "5"},
  {code: "Digit6", default: "6"},
  {code: "Digit7", default: "7"},
  {code: "Digit8", default: "8"},
  {code: "Digit9", default: "9"},
  {code: "Digit0", default: "0"},
  {code: "Minus", default: "-", upperDefault: "_"},
  {code: "Equal", default: "=", upperDefault: "+"},
  {code: "Backspace", default: "Backspace"} ], 
[ {code: "Tab", default: "Tab"},
  {code: "KeyQ", default: "q", additional: "й"},
  {code: "KeyW", default: "w", additional: "ц"},
  {code: "KeyE", default: "e", additional: "у"},
  {code: "KeyR", default: "r", additional: "к"},
  {code: "KeyT", default: "t", additional: "е"},
  {code: "KeyY", default: "y", additional: "н"},
  {code: "KeyU", default: "u", additional: "г"},
  {code: "KeyI", default: "i", additional: "ш"},
  {code: "KeyO", default: "o", additional: "щ"},
  {code: "KeyP", default: "p", additional: "з"},
  {code: "BracketLeft", default: "[", upperDefault: "{", additional: "х"},
  {code: "BracketRight", default: "]", upperDefault: "}", additional: "ъ"},
  {code: "Backslash", default: "\\", upperDefault: "|", "upperAdditional": "/"},
  {code: "Delete", default: "Del" } ],
[ {code: "CapsLock", default: "CapsLock"},
  {code: "KeyA", default: "a", additional: "ф"},
  {code: "KeyS", default: "s", additional: "ы"},
  {code: "KeyD", default: "d", additional: "в"},
  {code: "KeyF", default: "f", additional: "а"},
  {code: "KeyG", default: "g", additional: "п"},
  {code: "KeyH", default: "h", additional: "р"},
  {code: "KeyJ", default: "j", additional: "о"},
  {code: "KeyK", default: "k", additional: "л"},
  {code: "KeyL", default: "l", additional: "д"},
  {code: "Semicolon", default: ";", upperDefault: ":", additional: "ж"},
  {code: "Quote", default: "'", upperDefault: '"', additional: "э"},
  {code: "Enter", default: "Enter" } ],
[ {code: "ShiftLeft", default: "Shift"},
  {code: "KeyZ", default: "z", additional: "я"},
  {code: "KeyX", default: "x", additional: "ч"},
  {code: "KeyC", default: "c", additional: "с"},
  {code: "KeyV", default: "v", additional: "м"},
  {code: "KeyB", default: "b", additional: "и"},
  {code: "KeyN", default: "n", additional: "т"},
  {code: "KeyM", default: "m", additional: "ь"},
  {code: "Comma", default: ",", upperDefault: "<", additional: "б"},
  {code: "Period", default: ".", upperDefault: ">", additional: "ю"},
  {code: "Slash", default: "/", upperDefault: "?", additional: ".", "upperAdditional": ","},
  {code: "ArrowUp", default: "↑"},
  {code: "ShiftRight", default: "Shift" } ], 
[ {code: "ControlLeft", default: "Ctrl"},
  {code: "MetaLeft", default: "Win"},
  {code: "AltLeft", default: "Alt"},
  {code: "Space", default: " "},
  {code: "AltRight", default: "Alt"},
  {code: "ArrowLeft", default: "←"},
  {code: "ArrowDown", default: "↓"},
  {code: "ArrowRight", default: "→"},
  {code: "ControlRight", default: "Ctrl" } ]
]

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
    keyboardKey.className = `key ${key.code}`;
    if (!key.additional)
      keyboardKey.innerHTML = key.default;
    else
      keyboardKey.innerHTML = key.additional;
    keyboardRow.appendChild(keyboardKey);
  }
  keyboardWrapper.appendChild(keyboardRow);
}