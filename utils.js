import keyboard from "./layout.js";

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

export function init(language = 'en') {
  for (let row of keyboard) {
    let keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    for (let key of row) {
      let keyboardKey = document.createElement('button');
      keyboardKey.className = `key ${key.code}`;
      if (key.func) {
        keyboardKey.innerHTML = key.func;
      } else {
        switch(language) {
          case 'en':
            keyboardKey.innerHTML = key.en;
            break;
          case 'ru':
            key.ru ? keyboardKey.innerHTML = key.ru : keyboardKey.innerHTML = key.en;
            break;
        }
      }
      keyboardRow.appendChild(keyboardKey);
    }
    keyboardWrapper.appendChild(keyboardRow);
  }
}

export function switchLayout(language) {
  let keys = document.querySelectorAll('.key');
  let layout = keyboard.flat();
  for (let i = 0; i < keys.length; i++) {
    keys[i].innerHTML = '';
    if (layout[i].func) {
      keys[i].innerHTML = layout[i].func;
    } else {
      switch(language) {
        case 'en':
          keys[i].innerHTML = layout[i].en;
          break;
        case 'ru':
          layout[i].ru ? keys[i].innerHTML = layout[i].ru : keys[i].innerHTML = layout[i].en;
          break;
        case 'upperEn':
          layout[i].upperEn ? keys[i].innerHTML = layout[i].upperEn : keys[i].innerHTML = layout[i].en.toUpperCase();
          break;
        case 'upperRu':
          if (layout[i].upperRu)
            keys[i].innerHTML = layout[i].upperRu;
          if (!layout[i].upperRu && layout[i].ru)  
            keys[i].innerHTML = layout[i].ru.toUpperCase();
          if (!layout[i].upperRu && !layout[i].ru && layout[i].upperEn) 
            keys[i].innerHTML = layout[i].upperEn;
          if (!layout[i].upperRu && !layout[i].ru && !layout[i].upperEn) 
            keys[i].innerHTML = layout[i].en;
          break;
      }
    }

  }
  
}
