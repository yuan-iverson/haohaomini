// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {
    env:"test-3g0lmsdr3bfea267"
  }
)

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return cloud.database().collection("xinwenlist").get({
    success(res){
      return res
    },
    fail(err){
      return err 
    }
  })

}