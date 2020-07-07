import $ from 'jquery'

//.platform height 响应页面宽度

var clientWidth = document.documentElement.clientWidth


var setPlatformHeight = function() {
  var $platform = $('#platform');

  var width = $platform.width();  //width => undefined
  console.log(width)
  var height = Math.floor(width / (2880 / 1180));
  console.log(height)
  $platform.css({ height: height});

};

setPlatformHeight()



var pageResize = function() {
  $(window).resize(function() {
    clientWidth = document.documentElement.clientWidth;
    setPlatformHeight()
  });
};
pageResize()



