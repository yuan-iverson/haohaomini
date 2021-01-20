// pages/xinwen/xinwen.js
Page({
  data: {
    xinwen:[]
  },
  onLoad(options){
    console.log("详情页接的id",options.id)
    wx.cloud.database().collection("xinwenlist")
    .doc(options.id)
    .get()
    .then(res=>{
      console.log("详情页成功",res.data)
      this.setData({
        xinwen:res.data
      })
    })
    .catch(res=>{
      console.log("详情页失败",res)
    })
  }
  
})