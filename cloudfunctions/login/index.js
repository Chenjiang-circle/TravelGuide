// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  var result = await db.collection("user").where({
    'userInfo.openId': wxContext.OPENID
  }).count();
  if (result.total == 1) {
    return await "非空";
  } else {
    // 将尚未注册过的用户注册到数据库中
    return await db.collection("user").add({
      data: event
    });
  }
  // if (!result) {

  // } else {
  //   return await "已存在";
  // }

  // return {
  //   event: event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}