// define(['lib/jquery', 'lib/jquery/easing'], function($, easing) {

import $ from 'jquery'
// import easing from 'easing'

var Jsidebar = $('#J-sidebar')
var Jgotop = $('#J-gotop')
var Jarrow = $('#J-gotop i')
var Jtext = $('#J-gotop p')


Jsidebar.hover(function () {
  console.log('hover')
  $(this).animate({right: '0px'}, 100)
}, function () {
  $(this).animate({right: '-64px'}, 100)
})

Jgotop.click(function () {
  console.log('click')
  var scrollTop = $(window).scrollTop()
  if (scrollTop > 0) {
    //参数'easeInOutCubic' 报错
    $('body,html').animate({scrollTop: 0}, 500)
  } else {
    return
  }
})

