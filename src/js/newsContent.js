import "./dialog"

//检查地址参数 ajax
$(function () {
  let url = window.location.href
  let newsId = url.split('=')[1]
  console.log(newsId)

  let newsContentUrl = 'http://api.wxjz.719471.net/mobile/article/article/info?CK=735468c0b41aa74edc66d8e5d82b53ce&id=' + newsId

  let response = $.ajax({
    url: newsContentUrl,
    success: function (response) {
      console.log(response)
      document.title = response.data.title
      $('.news-title').text(response.data.title)
      $('.news-content').html(response.data.content.replace('欢迎使用ueditor', ''))
    }
  })
})
//用户反馈弹窗
$('.user-feedback').click(function(){
  $.dialog({
    contentHtml : '<p style="text-align: center">请联系客服：<a href="tel:020-89662075">020-89662075</a></p>'
  });
});