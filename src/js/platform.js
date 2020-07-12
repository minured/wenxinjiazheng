import "./dialog"

//用户反馈弹窗
$('.user-feedback').click(function(){
  $.dialog({
    contentHtml : '<p style="text-align: center">请联系客服：<a href="tel:020-89662075">020-89662075</a></p>'
  });
});