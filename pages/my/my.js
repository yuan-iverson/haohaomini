// pages/my/my.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true ,
    nickName:'',//昵称
    avatarUrl:'',//头像
  },
  getuserinfo:function(e){
    console.log(e.detail.userInfo);
    this.setData({
      isShow:false,
      nickName:e.detail.userInfo.nickName,//昵称
      avatarUrl:e.detail.userInfo.avatarUrl,//头像
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   //进入页面先获取全局变量是否有用户信息
  //   console.log(app.globalData)
  //   if(app.globalData){
  //     setTimeout(()=> {
  //       console.log('全局变量用户信息存在这里',app.globalData.userInfo['nickName']);
  //       this.setData({
  //       nickName:app.globalData.userInfo['nickName'],
  //       avatarUrl:app.globalData.userInfo['avatarUrl'],
  //       isShow:false,
  //     })
  //     },2000)
  //   }else{
  //     app.userInfoReadyCallback =res =>{
  //       console.log('获取数据')
  //       this.setData({
  //         userInfo:res.userInfo
  //       })
  //     }
  //   }
  // },
  //获取用户openid
  getopenid(){
    wx.cloud.callFunction({
      name:"getopenid",
      success(res){
        console.log("获取openid陈工",res.result)
      },
      fail(res){
        console.log("获取openid陈工",res)
      }
    })
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

  }
})