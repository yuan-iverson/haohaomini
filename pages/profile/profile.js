// // pages/profile/profile.js
// // const db =wx.cloud.database({});
// // const cont = db.collection('xinwenlist');

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     list:[],
//   },
//   getchanpinlist(){
//     let len = this.data.list.length
//     wx.cloud.database().collection('chanpinlist')
//     .skip(len)
//     .get()
//     .then(res=>{
//       console.log('获取成功',res)
//       this.setData({
//         list:this.data.list.concat(res.data),
//       })
//     })
//     .catch(res=>{
//       console.log('获取失败',res)
//     })
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     this.getchanpinlist()
//   }
// })
