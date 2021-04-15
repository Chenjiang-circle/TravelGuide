// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database();
const _ = db.command;
const $ = db.command.aggregate

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
 * 通过景点类型数组，查询多种类型的景点信息
 * @param {Array} types 景点类型数组
 */
async function queryAttractionByTypes(types) {
  var list = new Array();
  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    list[index] = (await db.collection('attractions').where({
      type: element._id
    }).get()).data;
  }
  return list;
}

/**
 * 获取所有景点的类型
 */
function queryAttractionsAllType() {
  return db.collection('attractions').aggregate()
    .group({
      _id: '$type'
    }).end();
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
 * 通过景点名称列表查询一组景点信息
 * @param {Array} names 需要查询的景点名称列表
 */
async function queryAttractionByNames(names) {
  var list = new Array();
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    list[index] = (await db.collection('attractions').where({
      name: element
    }).get()).data;
  }
  return list;
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
    case 5:
      result = (await queryAttractionsByName(event.name)).data[0].location;
      break;
    case 6:
      result = (await queryAttractionsAllType()).list;
      break;
    case 7:
      result = await queryAttractionByTypes(event.types);
      break;
    case 8:
      result = await queryAttractionByNames(event.names);
    default:
      result = {};
      break;
  }

  return result;
}