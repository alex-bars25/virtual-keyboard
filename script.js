import {init, switchLayout} from "./init.js";

let language = 'en';
init(language);

let keys = document.querySelectorAll('.key');
let caps = document.querySelector('.CapsLock');

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  for (let item of keys) {
    if (item.classList.contains(e.code)) {
      item.classList.add('active');
    }
  }
    
  if (e.ctrlKey && e.altKey) {
    switch (language) {
      case 'en': language = 'ru'; break;
      case 'ru': language = 'en'; break;
      case 'upperEn': language = 'upperRu'; break;
      case 'upperRu': language = 'upperEn'; break;
    }
    switchLayout(language);
  }

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);
  }

  if (e.code === 'CapsLock') {
    caps.classList.toggle('caps')
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);
  }
});

document.addEventListener('keyup', (e) => {
  for (let item of keys) {
    if (item.classList.contains(e.code))
      item.classList.remove('active')
  }

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);
  }
});