'use strict';

var $menuWrap = $('.menuWrap');
var $menu = $('#menu');
var $nav = $('nav');
var $navTrigger = $('.toggle-menu');

// toggle menu 
$navTrigger.on('click', function () {
  $menuWrap.toggleClass('open-menu');
  $nav.toggleClass('show');
  $menu.toggleClass('showNav');
});

// fullpage customization
$('#fullpage').fullpage({
  navigation: false,
  slidesNavigation: false,
  controlArrows: false,
  anchors: ['intro', 'pOne', 'pTwo', 'pThree', 'pFour', 'contact'],
  easingcss3: '',
  touchSensitivity: 15
});
//# sourceMappingURL=main.js.map
