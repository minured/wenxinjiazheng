import axios from 'axios'
import dayjs from 'dayjs'
import router from "../router"
import response from 'vue-resource/src/http/response'
new Vue({
  router,
  data() {
    return {
      typeList: undefined,
      newList: undefined,
      startCount: 0

    }
  },
  methods:{
    openNewsContent(id){
      window.open(`./newsContent.html?id=${id}`)
      console.log(window.location)
    },
    loadMore(){
      let url_news = `http://api.wxjz.719471.net/mobile/article/article/list?CK=735468c0b41aa74edc66d8e5d82b53ce&category_id=2&pageStartCount=${10}&pageSize=10&is_show=1`
      axios.get(url_news).then(response => {
        let response_news = response.data.data.list
        if (response_news.length > 0) {
          this.newList.push(response.data.data.list)
        } else {
          window.alert('暂无更多')
        }
      }, (r) => {console.log(r)})
    }

  },
  mounted() {
    let url = 'http://api.wxjz.719471.net/mobile/article/cate/info?CK=735468c0b41aa74edc66d8e5d82b53ce&id=2'
    axios.get(url).then((response) => {
      this.typeList = response.data.data
    })
    let url_news = 'http://api.wxjz.719471.net/mobile/article/article/list?CK=735468c0b41aa74edc66d8e5d82b53ce&category_id=2&pageStartCount=0&pageSize=10&is_show=1'
    axios.get(url_news).then((response) => {
      this.newList = response.data.data.list
      this.newList.forEach(i => {
        i.create_time = dayjs(parseInt(i.create_time) * 1000).format('YYYY-M-D HH:MM')

      })

      this.startCount += 10
    })
  },


}).$mount('#root')





