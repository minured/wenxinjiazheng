$('h1.logo').on('click', () => {
  window.open('./index.html', "_self")
})

//锚点选中
$('.tab-btns').on("click", function(e){

  let el = e.target

  $(this).find("a").removeClass("selected").removeClass("bold")
  $()

  if (el.href.split("#")[1] === "intro") {
    console.log('1')
    $(el).addClass("selected").addClass("bold")
  } else if (el.href.split("#")[1] === "flow") {
    $(el).addClass("selected").addClass("bold")

  } else if (el.href.split("#")[1] === "require") {
    $(el).addClass("selected").addClass("bold")
  }
})

//intro
//flow
//require
