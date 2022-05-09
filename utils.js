/* eslint-disable import/extensions */
import keyboard from './layout.js';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.prepend(wrapper);

const title = document.createElement('h1');
title.innerHTML = 'RSS Virtual Keyboard';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';

const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard-wrapper';

const text = document.createElement('div');
text.innerHTML = '<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левые ctrl + alt</p>';

wrapper.appendChild(title);
wrapper.appendChild(textarea);
wrapper.appendChild(keyboardWrapper);
wrapper.appendChild(text);

export function init(language = 'en') {
  for (const row of keyboard) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    for (const key of row) {
      const keyboardKey = document.createElement('button');
      keyboardKey.className = `key ${key.code}`;
      if (key.func) {
        keyboardKey.innerHTML = key.func;
      } else {
        switch (language) {
          case 'en':
            keyboardKey.innerHTML = key.en;
            break;
          case 'ru':
            if (key.ru) {
              keyboardKey.innerHTML = key.ru;
            } else {
              keyboardKey.innerHTML = key.en;
            }
            break;
          default:
        }
      }
      keyboardRow.appendChild(keyboardKey);
    }
    keyboardWrapper.appendChild(keyboardRow);
  }
}

export function switchLayout(language) {
  const keys = document.querySelectorAll('.key');
  const layout = keyboard.flat();
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].innerHTML = '';
    if (layout[i].func) {
      keys[i].innerHTML = layout[i].func;
    } else {
      switch (language) {
        case 'en':
          keys[i].innerHTML = layout[i].en;
          break;
        case 'ru':
          if (layout[i].ru) {
            keys[i].innerHTML = layout[i].ru;
          } else {
            keys[i].innerHTML = layout[i].en;
          }
          break;
        case 'upperEn':
          if (layout[i].upperEn) {
            keys[i].innerHTML = layout[i].upperEn;
          } else {
            keys[i].innerHTML = layout[i].en.toUpperCase();
          }
          break;
        case 'upperRu':
          if (layout[i].upperRu) {
            keys[i].innerHTML = layout[i].upperRu;
          }
          if (!layout[i].upperRu && layout[i].ru) {
            keys[i].innerHTML = layout[i].ru.toUpperCase();
          }
          if (!layout[i].upperRu && !layout[i].ru && layout[i].upperEn) {
            keys[i].innerHTML = layout[i].upperEn;
          }
          if (!layout[i].upperRu && !layout[i].ru && !layout[i].upperEn) {
            keys[i].innerHTML = layout[i].en;
          }
          break;
        default:
      }
    }
  }
}
