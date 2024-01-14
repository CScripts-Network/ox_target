import { createOptions } from './createOptions.js';

const optionsWrapper = document.getElementById('options-wrapper');
const body = document.body;
const eye = document.getElementById('eyeSvg');

window.addEventListener('message', (event) => {
  optionsWrapper.innerHTML = '';

  switch (event.data.event) {
    case 'visible': {
      if(!event.data.state) {
        $('.eye').stop().animate({opacity: 0})
        $('.eye').removeClass('target-eye-active')
        $('.options-wrapperw').stop().animate({opacity: 0})
      } else {
        $('.eye').stop().animate({opacity: 0.6})
      }
      
      body.style.visibility = event.data.state ? 'visible' : 'hidden';
      return (eye.style.fill = 'black');
    }

    case 'leftTarget': {
      $('.eye').removeClass('target-eye-active')
      $('.eye').stop().animate({opacity: 0.6})
      $('.options-wrapperw').stop().animate({opacity: 0})
      return (eye.style.fill = 'black');
    }

    case 'setTarget': {
      eye.style.fill = '#cfd2da';
      $('.eye').addClass('target-eye-active')
      $('.eye').stop().animate({opacity: 1})
      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }
      $('.options-wrapperw').stop().animate({opacity: 1})
    }
  }
});
