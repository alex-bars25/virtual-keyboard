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

export default function init(language = 'en') {
  for (let row of keyboard) {
    let keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    for (let key of row) {
      let keyboardKey = document.createElement('button');
      keyboardKey.className = `${key.code} key`;
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
          case 'upperEn':
            key.upperEn ? keyboardKey.innerHTML = key.upperEn : keyboardKey.innerHTML = key.en.toUpperCase();
            break;
          case 'upperRu':
            if (key.upperRu)
              keyboardKey.innerHTML = key.upperRu;
            if (!key.upperRu && key.ru)  
              keyboardKey.innerHTML = key.ru.toUpperCase();
            if (!key.upperRu && !key.ru && key.upperEn) 
              keyboardKey.innerHTML = key.upperEn;
            if (!key.upperRu && !key.ru && !key.upperEn) 
              keyboardKey.innerHTML = key.en;
            break;
        }
      }
      keyboardRow.appendChild(keyboardKey);
    }
    keyboardWrapper.appendChild(keyboardRow);
  }
}
