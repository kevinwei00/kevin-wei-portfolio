'use strict';

window.addEventListener('load', function() {
  document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.js-scroll-to-about').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.js-scroll-to-projects').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  });
});