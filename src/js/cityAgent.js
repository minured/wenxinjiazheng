import $ from 'jquery'

//点击添加类
console.log($('span.section>a'))

$("span.section>a").on("click", function(e) {
  let el = e.target
  $("span.section>a").removeClass("selected")
  console.log(el)
  //platform process rules
  if (el.href.split("#")[1] === "platform"){
    $(el).addClass("selected")
  } else if (el.href.split("#")[1] === "process") {
    $(el).addClass("selected")
  } else if(el.href.split("#")[1] === "rules") {
    $(el).addClass("selected")
  }
})


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


//导航栏选中
$('.section>a').on("click", function() {

})


