// pages/profile/profile.js
// const db =wx.cloud.database({});
// const cont = db.collection('xinwenlist');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  getxinwenlist(){
    let len = this.data.list.length
    wx.cloud.database().collection('xinwenlist')
    .skip(len)
    .get()
    .then(res=>{
      console.log('获取成功',res)
      this.setData({
        list:this.data.list.concat(res.data)
      })
    })
    .catch(res=>{
      console.log('获取失败',res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getxinwenlist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goxinwen(event){
    console.log('点击获取的数据',event.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/xinwen/xinwen?id='+event.currentTarget.dataset.id,
    })
  }


 

})