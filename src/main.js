import "./js/carousel1"  //合作案例轮播
import './js/carousel2'  //新闻报道轮播
import './js/sidebar'
import './js/easing'

// 首页滚动动画
var clientHeight = document.documentElement.clientHeight;
var pagePosition = 0

var pageResize = function() {
    $(window).resize(function() {
        clientHeight = document.documentElement.clientHeight;
    });
};

// 设置宽度响应banner
var setHeadPicHeight = function() {
    var headPicDOM = $('#headpic');
    var width = headPicDOM.width();
    console.log(width)
    var height = Math.floor(width / (2880 / 1180));
    headPicDOM.css({ height: height });
};

var animation = function() {
    // 监听屏幕滚动
    $(window).on("scroll load", function() {
    // $(window).scroll(function() {
        pagePosition = $(window).scrollTop() + clientHeight;
        /* 动画顺序：服务介绍 => 品类全覆盖 => 手机 => 列表*/
        if (pagePosition > 1050) {
            $('.title-3').css({
                "opacity": 1,
                "top": 186 + 'px'
            });
        } else {
            $('.title-3').css({

                "opacity": 0,
                "top": 250 + 'px'
            });
        }

        var cssShowObj = {
            "top": 50 + 'px',
            "opacity": 1,
            "transition": "all 0.2s"
        };
        var cssHideObj = {
            "top": 100 + 'px',
            "opacity": 0,
            "transition": "all 0.2s"
        };

        // 三大部分(服务介绍\合作案例\新闻报道)
        if (pagePosition > 1250) {
            $('.text-title').css({ "opacity": 1, "top": 380 + 'px' });
            $('.iphone-part').css({ "top": 340 + 'px', "opacity": 1 });
            setTimeout(function(){
             $('.delicacy').css(cssShowObj);
            }, 0);
            setTimeout(function(){
              $('.desserts').css(cssShowObj);
            }, 300);
            setTimeout(function(){
              $('.fresh').css(cssShowObj);
            }, 600);
            setTimeout(function(){
              $('.supermarket').css(cssShowObj);
            }, 900);
        } else {
            $('.text-title').css({ "opacity": 0, "top": 450 + 'px' });
            $('.iphone-part').css({"top": 420 + 'px', "opacity": 0 });

            $('.delicacy').css(cssHideObj);
            $('.desserts').css(cssHideObj);
            $('.fresh').css(cssHideObj);
            $('.supermarket').css(cssHideObj);
        }

        // 优秀合作案例
        if (pagePosition > 2000) {
            $('.title-4').css({
                "opacity": 1,
                "top": 90 + 'px'
            });
        } else {
            $('.title-4').css({
                "opacity": 0,
                "top": 140 + 'px'
            });
        }

        if (pagePosition > 2200) {
            $('.half-background').css({
                "opacity": 1,
                "top": 0 + 'px'
            });
            $('.arrows').css({
                "opacity": 1,
                "transition": "all 0.5s"
            })
        } else {
            $('.half-background').css({
                "opacity": 0,
                "top": 100 + 'px'
            });
        }

        if (pagePosition > 2200){
             $(".story-slider-container").css({
                "opacity": 1,
                "top": 30 + 'px'
             });

        } else {
            $(".story-slider-container").css({
                "opacity": 0,
                "top": 80 + 'px'
             });
        }



        // 媒体新闻报道
        if (pagePosition > 2900){
            $('.title-5').css({
                "opacity": 1,
                "top": 80 + 'px'
            });
        } else {
            $('.title-5').css({
                "opacity": 0,
                "top": 180 + 'px'
            });
        }

        // slider
        if (pagePosition > 3100) {
            $('.news-left').css({
                "opacity": 1,
                "top": 0 + 'px'
            });
            $('.news-title').css({
                "opacity": 1,
                "top": 0 + 'px'
            });
            setTimeout(function(){
                $('.news-background').css({
                    "opacity": 1,
                    "top": 40 + 'px',
                    "transition": "all 1.3s"
                });
               }, 100);
            setTimeout(function(){
                $('.news-right').css({
                    "opacity": 1,
                    "top": 0 + 'px'
                });
               }, 300);
            
        } else {
            $('.news-left').css({
                "opacity": 0,
                "top": 100 + 'px'
            });
            $('.news-title').css({
                "opacity": 0,
                "top": 100 + 'px'
            });
            setTimeout(function(){
                $('.news-background').css({
                    "opacity": 0,
                    "top": 100 + 'px'
                });
               }, 100);
            $('.news-right').css({
                "opacity": 0,
                "top": 100 + 'px'
            });
        }
    });

};

// 执行
var addEvent = function() {
    setHeadPicHeight();
    $(window).resize(function() {
        setHeadPicHeight();
    });
    animation();
    pageResize();
};

addEvent();

//服务介绍 鼠标移入效果
$(".classified").find('li').mouseenter(function(){
    $(this).addClass('text-part-picked')
})
$('.classified').find('li').mouseleave(function(){
    $(this).removeClass('text-part-picked')
})




