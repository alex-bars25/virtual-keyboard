import {init, switchLayout} from "./utils.js";

let language = localStorage.getItem('lang');
if (!language) {
  language = localStorage.setItem('lang', 'en');
  init(language);
} else {
  init(language);
}

const keys = document.querySelectorAll('.key');
const caps = document.querySelector('.CapsLock');
let allow = true;
const shiftLeft = document.querySelector('.ShiftLeft')
const shiftRight = document.querySelector('.ShiftRight')
const textarea = document.querySelector('.textarea');
let before = '';
let after = '';
let position = 0;
const functionalKeys = ["Backspace", "Tab", "Delete", "CapsLock", "Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight"];

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  for (let item of keys) {
    if (item.classList.contains(e.code) && !item.className.match(/caps|shift/ig)) {
      item.classList.add('active');
      if (!functionalKeys.includes(e.code)) {
        before += item.innerHTML;
        position++;
        textarea.focus();
        textarea.innerHTML = `${before}${after}`
        textarea.selectionStart = position;
      }
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
    localStorage.removeItem('lang')
    localStorage.setItem('lang', language)
  }

  if (e.code === 'ShiftLeft') {
    shiftLeft.classList.add('active')
    shiftRight.classList.remove('active')
    if (caps.classList.contains('active')) {
      switch (language) {
        case 'upperEn': language = 'en'; break;
        case 'upperRu': language = 'ru'; break;
      }  
    } else {
      switch (language) {
        case 'en': language = 'upperEn'; break;
        case 'ru': language = 'upperRu'; break;
      }
    }
    switchLayout(language);
  }

  if (e.code === 'ShiftRight') {
    shiftRight.classList.add('active')
    shiftLeft.classList.remove('active')
    if (caps.classList.contains('active')) {
      switch (language) {
        case 'upperEn': language = 'en'; break;
        case 'upperRu': language = 'ru'; break;
      }  
    } else {
      switch (language) {
        case 'en': language = 'upperEn'; break;
        case 'ru': language = 'upperRu'; break;
      }
    }
    switchLayout(language);
  }

  if (e.code === 'CapsLock') {
    if (e.repeat) allow = !e.repeat;
    if (!allow) return;
    allow = false;
    caps.classList.toggle('active');
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);

  }

  if (e.code === 'Tab') {
    before += '\t';
    position++;
    textarea.focus();
    textarea.innerHTML = `${before}${after}`
    textarea.selectionStart = position;
  }

  if (e.code === 'Enter') {
    before += '\n';
    position++;
    textarea.focus();
    textarea.innerHTML = `${before}${after}`
    textarea.selectionStart = position;
  }

  if (e.code === 'Backspace') {
    before = before.slice(0, position - 1);
    position > 0 ? position-- : 0;
    textarea.focus();
    textarea.innerHTML = `${before}${after}`
    textarea.selectionStart = position;
  }

  if (e.code === 'Delete') {
    if (position !== textarea.innerHTML.length)
      after = after.slice(1);
    textarea.focus();
    textarea.innerHTML = `${before}${after}`
    textarea.selectionStart = position;
  }
});

document.addEventListener('keyup', (e) => {
  for (let item of keys) {
    if (item.classList.contains(e.code) && !item.className.match(/caps|shift/ig))
      item.classList.remove('active')
  }

  if (e.code === 'CapsLock')
    allow = true;

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    shiftLeft.classList.remove('active')
    shiftRight.classList.remove('active')
    if (!caps.classList.contains('active')) {
      switch (language) {
        case 'upperEn': language = 'en'; break;
        case 'upperRu': language = 'ru'; break;
      }  
    } else {
      switch (language) {
        case 'en': language = 'upperEn'; break;
        case 'ru': language = 'upperRu'; break;
      }
    }
    switchLayout(language);
  }
});

textarea.addEventListener('click', () => {
  position = textarea.selectionStart;
  before = textarea.innerHTML.slice(0, position);
  after = textarea.innerHTML.slice(position);
  console.log(position);
});


document.addEventListener('mousedown', (e) => {
  const ctrl = document.querySelector('.ControlLeft');
  const alt = document.querySelector('.AltLeft')
  if (e.target.classList.contains('ControlLeft')) {
    ctrl.classList.add('active')
  }

  if (e.target.classList.contains('AltLeft')) {
    alt.classList.add('active')
  }

  if ((e.target.classList.contains('AltLeft') && ctrl.classList.contains('active')) || (e.target.classList.contains('ControlLeft') && alt.classList.contains('active'))) {
    switch (language) {
      case 'en': language = 'ru'; break;
      case 'ru': language = 'en'; break;
      case 'upperEn': language = 'upperRu'; break;
      case 'upperRu': language = 'upperEn'; break;
    }
    switchLayout(language);
    localStorage.removeItem('lang')
    localStorage.setItem('lang', language)
    ctrl.classList.remove('active');
    alt.classList.remove('active')
  } 

  if (e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) {
    
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);
  }

  if (!functionalKeys.includes(e.target.classList[1]) && e.target.classList.contains('key')) {
    before += e.target.innerHTML;
    position++;
    textarea.innerHTML = `${before}${after}`
  }

  if (e.target.classList.contains('CapsLock')) {
    caps.classList.toggle('caps')
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);
  }

  if (e.target.classList.contains('Tab')) {
    before += '\t';
    position++;
    textarea.innerHTML = `${before}${after}`
  }

  if (e.target.classList.contains('Enter')) {
    before += '\n';
    position++;
    textarea.innerHTML = `${before}${after}`
  }

  if (e.target.classList.contains('Backspace')) {
    before = before.slice(0, position - 1);
    position > 0 ? position-- : 0;
    textarea.innerHTML = `${before}${after}`
  }

  if (e.target.classList.contains('Delete')) {
    if (position !== textarea.innerHTML.length)
      after = after.slice(1);
    textarea.innerHTML = `${before}${after}`
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) {
    switch (language) {
      case 'en': language = 'upperEn'; break;
      case 'ru': language = 'upperRu'; break;
      case 'upperEn': language = 'en'; break;
      case 'upperRu': language = 'ru'; break;
    }
    switchLayout(language);
  }
});