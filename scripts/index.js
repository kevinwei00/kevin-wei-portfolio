'use strict';

window.addEventListener('load', function() {
  let links = document.querySelectorAll('.js-scroll-to-top');
  for (let link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    });
  }

  links = document.querySelectorAll('.js-scroll-to-about');
  for (let link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
  }

  links = document.querySelectorAll('.js-scroll-to-projects');
  for (let link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // initialize parallax
  let rellax = new Rellax('.rellax');
});