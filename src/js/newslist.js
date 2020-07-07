import axios from 'axios'
import dayjs from 'dayjs'

console.log(dayjs)
new Vue({
  data() {
    return {
      msg: 'hello',
      typeList: undefined,
      newList: undefined

    }
  },
  methods: {
    formatDate(dates) {
      var date = new Date(dates)
      var YY = date.getFullYear() + '-'
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
      var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
      var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
      var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
      return YY + MM + DD + ' ' + hh + mm + ss
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
        console.log(i)
      })
    })
  }

}).$mount('#root')



