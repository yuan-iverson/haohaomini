//app.js
App({
  onLaunch: function () {
    //云开发环境初始化
    wx.cloud.init({
      env:"test-3g0lmsdr3bfea267"
    })
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          // console.log('之前已经授权了小程序--获取小程序信息',res.authSetting);
            wx.getUserInfo({
             success:data=>{
              //  console.log(data.userInfo);
                this.globalData.userInfo = data.userInfo;

                if(this.userInfoReadyCallback){
                  console.log('进入函数')
                  this.userInfoReadyCallback(data.userInfo)
                }
             }
            })
        }else{
          console.log('之前没授权')
        }
      }
    })
  },
  globalData: {
    userInfo: '',//用户信息
  }
})