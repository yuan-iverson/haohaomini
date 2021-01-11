//app.js
App({
  onLaunch: function () {
    //云开发环境初始化
    wx.cloud.init({
      env:"test-3g0lmsdr3bfea267"
    })
  },
  globalData: {
    userInfo: null
  }
})