// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;

/**
 * 通过景点类型查找景点信息
 * @param {string} type 景点类型
 */
function queryAttractionsByType(type) {
  return db.collection('attractions').where({
    type: type
  }).get();
}

/**
 * 通过景点名称获取景点信息
 * @param {string} name 景点名称
 */
function queryAttractionsByName(name) {
  return db.collection('attractions').where({
    name: name
  }).get();
}

/**
 * 获取所有的景点信息
 */
function queryAllAttractions() {
  return db.collection('attractions').get();
}

/**
 * 通过id获取特定景点信息
 * @param {string} id 景点数据id
 */
function queryAttrwactionInfoById(id) {
  return db.collection('attractions').where({
    _id: id
  }).get();
}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  var result;
  switch (event.select) {
    case 1:
      result = await queryAttractionsByType(event.type);
      break;
    case 2:
      result = await queryAttractionsByName(event.name);
      break;
    case 3:
      result = await queryAllAttractions();
      break;
    case 4:
      result = await queryAttrwactionInfoById(event.id);
      break;
    default:
      result = {};
      break;
  }

  return await result;
}