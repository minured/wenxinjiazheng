// require.config({
//     baseUrl: MT.STATIC_ROOT + '/js'
// });


var storylist = [
  {
    img: '/src/static/img/story1.jpg',
    title1: '美团服务市场',
    title2: '米粉面馆接入经营助手服务，收入增幅达51.52%',
    para: '开一家店有多操心？加盟、选址、经营、管理到真正赚钱，期间的辛苦只有每家店老板才深有体会。美团服务市场聚集垂直领域优质服务商，打造一站式服务生态！从新店开业到老店升级、从店铺装修到营销托管、从食材供应到金融服务等，为所有商家提供店铺经营全方位服务，解决经营所遇难题，助力轻松做生意。',
    address: '/story?next_step=/newhome/story/1',
  },
  {
    img: '/src/static/img/story2.jpg',
    title1: '美团外卖骑手人物：李君',
    title2: '为减肥而成为美团兼职骑手，后来副业变“主业”',
    para: '李君是11位骑手中的一位，来自内蒙古包头市，他近三个月的准时率平均达到了99.9%，满意度100。当问到他知道自己可以去俄罗斯看世界杯时是什么心情，李君说接到电话刚开始不敢相信，后来反应过来就直接飞奔回家拿上身份证就去办加急护照了。开心激动的心情久久难平复……',
    address: '/story?next_step=/newhome/story/2',
  },
  {
    img: '/src/static/img/story3.jpg',
    title1: '美团外卖骑手人物：徐振',
    title2: '平凡之路上的英雄梦',
    para: '我觉得自从成了美团众包骑手之后，遇到了很多有趣新奇的人和事。以前我的生活比较单调，上班、回家两点一线。加入美团众包后，认识了许多朋友，帮助了一些人也得到了一些人的帮助。美团众包，为我的生活打开了一扇新的大门。我喜欢它的弹性、自由，让我对生活有了更多的掌控......',
    address: '/story?next_step=/newhome/story/3',
  },
]

console.log(storylist[0].img)
export default {storylist: storylist}
