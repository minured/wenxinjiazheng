import axios from 'axios'
import dayjs from 'dayjs'
import router from "../router"
new Vue({
  router,
  data() {
    return {
      typeList: undefined,
      newList: undefined
    }
  },
  methods:{
    openNewsContent(id){
      window.open(`./newsContent.html?id=${id}`)
      console.log(window.location)
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
    })
  },


}).$mount('#root')





