import dayjs from 'dayjs'

new Vue({
  data() {
    return {
      typeList: undefined,
      newList: undefined,
      startCount: 0
    }
  },
  methods:{
    openNewsContent(id){
      window.open(`./newsContent.html?id=${id}`, '_self')
      console.log(window.location)
    },
    loadMore(e){
      console.log('minu')
      let url_news = `http://api.wxjz.719471.net/mobile/article/article/list?CK=735468c0b41aa74edc66d8e5d82b53ce&category_id=2&pageStartCount=${10}&pageSize=10&is_show=1`

      $.get(url_news, response => {
        let response_news = response.data.list
        if (response_news.length > 0) {
          this.newList.push(response.data.list)
        } else {
          let el = e.target
          el.innerText = "暂无更多"
          $(el).attr("disabled",true).css({"cursor":"not-allowed"});  //禁止点击, 依然会发送,"pointer-events","none"不会发送
        }
      })

    }

  },
  mounted() {
    let url = 'http://api.wxjz.719471.net/mobile/article/cate/info?CK=735468c0b41aa74edc66d8e5d82b53ce&id=2'

    $.get(url, response => {
      console.log(response)
      this.typeList = response.data

    })
    let url_news = 'http://api.wxjz.719471.net/mobile/article/article/list?CK=735468c0b41aa74edc66d8e5d82b53ce&category_id=2&pageStartCount=0&pageSize=10&is_show=1'
    $.get(url_news, response => {
      this.newList = response.data.list
      this.newList.forEach(i => {
        i.create_time = dayjs(parseInt(i.create_time) * 1000).format('YYYY-M-D HH:MM')

      })

      this.startCount += 10
    })
  },


}).$mount('#root')





