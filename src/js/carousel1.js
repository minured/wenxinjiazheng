const $ = require('./jquery.js')
const easing = require('./easing.js')
import storylistFile from './story-list'


var timer = null
var interval = 2500
var index = 1

// list
var storyList = $('#story-list')

// container
var storySliderContainer = $('#story-slider-container')

// arrow
var leftArrow = $('#J-arrow-left')
var rightArrow = $('#J-arrow-right')

//  小点点
var navigationButtons = null

// 小点点container
var jNavigation = $('#navigation')
var length = 980

// data
var storylistData = storylistFile.storylist || []

// len
var len = storylistData.length

// DOM
var LIST_DOM = ''
var BUTTON_DOM = ''

// 头尾各一张[6, 1, 2, 3, 4, 5, 6, 1]
var firstStory = storylistData[0]
var lastStory = storylistData[storylistData.length - 1]
storylistData.push(firstStory)
storylistData.unshift(lastStory)

var fillDOM = function () {
  // 数据
  for (var i = 0; i < storylistData.length; i++) {
    LIST_DOM += '<li>' +
      '  <div class="container clearfix" data-link="' + storylistData[i].address + '">' +
      '    <div class="content">' +
      '      <h2>' + storylistData[i].title1 + '</h2>' +
      '      <h3>' + storylistData[i].title2 + '</h3>' +
      '      <p class="para">' + storylistData[i].para + '</p>' +
      //                        '      <a class="more" target="_blank" href="' + storylistData[i].address + '">查看详情</a>' +
      '      ' +
      '    </div>' +
      '    <div class="info-img"><img src="' + storylistData[i].img + '" /></div>' +
      '  <div>' +
      '</li>'
  }

  storyList.html(LIST_DOM)

  // 下角点
  for (var i = 0; i < len; i++) {
    if (i == 0) {
      BUTTON_DOM += '<li class="hover" data-index="1"></li>'
    } else {
      BUTTON_DOM += '<li data-index="' + (i + 1) + '"></li>'
    }
  }

  jNavigation.html(BUTTON_DOM)
  navigationButtons = $('#navigation li')

}


var animate = function (offset) {
  var left = parseInt(storyList.css('left')) + offset
  if (offset > 0) {
    offset = '+=' + offset
  } else {
    offset = '-=' + Math.abs(offset)
  }

  storyList.animate({left: offset}, 400, function () {
    if (left > -length) {
      storyList.css('left', -(length * len) + 'px')
    }
    if (left < -length * len) {
      storyList.css('left', -length + 'px')
    }
    // 滑动效果结束后 重新开启定时器
    play()
  })
}

var stop = function () {
  clearTimeout(timer)
}

var handleColors = function () {
  navigationButtons
    .eq(index - 1)
    .addClass('hover')
    .siblings()
    .removeClass('hover')
}

var slideToNext = function () {
  if (storyList.is(':animated')) {
    return
  }
  if (index == len) {
    index = 1
  } else {
    index = index + 1
  }

  // 清除定时器
  // 防止：点击上一页后，马上切换到下一页
  stop()
  animate(-length)
  handleColors()
}

var slideToPrev = function () {
  if (storyList.is(':animated')) {
    return
  }
  if (index == 1) {
    index = len
  } else {
    index = index - 1
  }

  // 清除定时器
  // 防止：点击下一页后，马上切换到下一页
  stop()
  animate(length)
  handleColors()
}

var play = function () {
  clearTimeout(timer)

  timer = setTimeout(function () {
    rightArrow.trigger('click')
    play()
  }, interval)
}

var addEvent = function () {
  leftArrow.bind('click', function () {
    slideToPrev()
  })

  rightArrow.bind('click', function () {
    slideToNext()
  })

  //点击跳转 案例详情
  // $('.part-4 .story-container .story-slider-container .container').click(function () {
  //   var link = $(this).data('link')
  //   window.open(link)
  // })

  navigationButtons.each(function () {
    $(this).bind('click', function () {
      var clickIndex = parseInt($(this).data('index'))
      var className = $(this).attr('class') || ''
      if (storyList.is(':animated') || className.indexOf('hover') > -1) {
        return
      }

      var offset = -length * (clickIndex - index)
      index = clickIndex

      // 清除定时器
      // 防止：点击后，马上切换到下一页
      stop()
      animate(offset)
      handleColors()
    })
  })

  storySliderContainer.hover(stop, play)
}


fillDOM()
play()
addEvent()
// })
