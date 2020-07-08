/*
 * 媒体新闻报道轮播
 *
 */



import $  from './jquery'
import easing from './easing'
import newsListDataFile from "./news-list"
import $clamp from 'clamp'

    var interval = 2500;
    var timer = null;

    // container
    var newsListContainer = $('#news-list-container');

    // 左侧新闻列表(ul)
    var newsList = $('#news-list');

    // 右侧新闻列表(li)
    var rightNewsList = $('#news-list-right');

    // 小点点
    var navigationButtons = $('#news-navigation li');

    // current index
    var currentIndex = $('#current-index');

    var len = 6;
    var length = 530;
    var index = 1;

    var fillDOM = function() {
        var newsListData = newsListDataFile.newsListData || [];

        // 头尾各一张[6, 1, 2, 3, 4, 5, 6, 1]
        var firstStory = newsListData[0];
        var lastStory = newsListData[newsListData.length - 1];
        newsListData.push(firstStory);
        newsListData.unshift(lastStory);

        // 左侧新闻列表
        var LEFT_NEWS_LIST_DOM = '';
        var RIGHT_NEWS_LIST_DOM = '';

        for (var i = 0; i < newsListData.length; i++) {
            // 左侧新闻列表
            LEFT_NEWS_LIST_DOM += '<li>' +
                   '  <div class="li-container" data-link="' + newsListData[i].address + '">' +
                   '    <div class="img-info">' +
                   '      <img src="' + newsListData[i].img + '" />' +
                   '    </div>' +
                   '    <div class="content">' +
                   '      <h2>' + newsListData[i].title + '</h2>' +
                   '      <div class="divide-line"></div>' +
                   '      <p class="para">' + newsListData[i].para + '</p>' +
//                   '      <a target="_blank" href="' + newsListData[i].address + '" class="more">查看详情</a>' +
                   '      <a class="more">查看详情</a>' +
                   '    </div>' +
                   '  </div>' +
                   '</li>';

            // 右侧新闻列表
            // 由于首、尾新增了一条新闻
            // 所以这块儿是[1-6]
            if (i > 0 && i < newsListData.length - 1) {
                RIGHT_NEWS_LIST_DOM +=
                    '<li data-index=' + i + '><span class="news-list-icon' + i + '"></span><a target="_blank" href="' +
                    newsListData[i].address +
                    '">' +
                    newsListData[i].title +
                    '</a></li>';
            }
            rightNewsList.html(RIGHT_NEWS_LIST_DOM);
        }

        newsList.html(LEFT_NEWS_LIST_DOM);

        // 超出2行添加省略号
        var h2DOMs = $('.part-5 .news-container .news-left .news-list-container ul li .li-container h2');
        h2DOMs.each(function(index, dom) {
            $clamp(dom, {clamp: 2});
        });

    };

    var animate = function(offset, isStop) {
        var top = parseInt(newsList.css('top')) + offset;
        if (offset > 0) {
            offset = '+=' + offset;
        } else {
            offset = '-=' + Math.abs(offset);
        }

        // easeOutBack
        newsList.animate({top: offset}, 500, function() {
            if (top > -length) {
                newsList.css({ top: -length * len + 'px' });
            }
            if (top < -length * len) {
                newsList.css({ top: -length + 'px' });
            }
            !isStop && play();
        });
    }

    var stop = function() {
        clearTimeout(timer);
    };

    var handleRest = function() {
        // handle currentIndex
        currentIndex.html('0' + index);

        /* handle news list
        rightNewsList
            .find('li')
            .eq(index - 1)
            .addClass('hover')
            .siblings()
            .removeClass('hover');
        */

        // handle colors
        navigationButtons
            .eq(index - 1)
            .addClass('hover')
            .siblings()
            .removeClass('hover');
    };

    // 向下
    var slideToPrev = function() {
        if (newsList.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = len;
        } else {
            index = index - 1;
        }

        // 清除定时器
        // 防止：点击上一页后，马上切换到下一页
        stop();
        animate(length);
        handleRest();
    };

    // 向上
    var slideToNext = function() {
        if (newsList.is(':animated')) {
            return;
        }
        if (index == len) {
            index = 1;
        } else {
            index = index + 1;
        }

        stop();
        animate(-length);
        handleRest();
    }

    var addEvent = function() {
        newsListContainer.hover(stop, play);

        // 点击打开新闻列表页
        $('.li-container').click(function() {
            var link = $(this).data('link');

            window.open(link);
        });

        navigationButtons.each(function() {
            $(this).bind('click', function() {
                var clickIndex = parseInt($(this).data('index'));
                var className = $(this).attr('class') || '';
                if (newsList.is(':animated') || className.indexOf('hover') > -1) {
                    return;
                }

                var offset = -(length) * (clickIndex - index);
                index = clickIndex;

                stop();
                animate(offset);
                handleRest();
            });
        });
    };

    var play = function () {
        stop();

        timer = setTimeout(function() {
            slideToNext();
            play();
        }, interval);
    };

    fillDOM();
    play();
    addEvent();
// });
