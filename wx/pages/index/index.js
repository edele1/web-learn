// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    top:'',
    all:'',
    before:[],
    date:''
  },
  // 事件处理函数
  bindViewTap() {
   
  },
  // 生命周期回调—监听页面加载
  onLoad:function(options) {
    var that=this
   wx.request({
     url: 'https://news-at.zhihu.com/api/3/news/latest',
     success:function(res){
      that.setData({
        'top':res.data.top_stories,
        'all':res.data.stories,
        'date':res.data.date,
      })
     },})},
     getdatalist: function () { 
      var that = this;
       wx.request({
         url: 'http://news-at.zhihu.com/api/3/news/before/'+that.data.date,
         success:function(res){
           that.setData({
             'before':(that.data.before).concat(res.data.stories),
             'date':res.data.date,
           })
         }
   })
  },
  onReachBottom: function () { //触底开始下一页
    var that=this
    that.getdatalist();
  },

})
