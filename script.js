import {init, switchLayout} from "./init.js";

let language = 'en';
init(language);

let keys = document.querySelectorAll('.key');
let caps = document.querySelector('.CapsLock');

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  for (let item of keys) {
    if (item.classList.contains(e.code))
      item.classList.add('active')
  }
  
  if (e.ctrlKey && e.altKey) {
    language === 'en' ? language = 'ru' : language = 'en'; 
    switchLayout(language);
  }

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    language === 'en' ? switchLayout('upperEn') : switchLayout('upperRu');
  }

  if (e.code === 'CapsLock') {
    caps.classList.toggle('caps')
  }

});

document.addEventListener('keyup', (e) => {
  for (let item of keys) {
    if (item.classList.contains(e.code))
      item.classList.remove('active')
  }

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    language === 'en' ? switchLayout('en') : switchLayout('ru');
  }
});