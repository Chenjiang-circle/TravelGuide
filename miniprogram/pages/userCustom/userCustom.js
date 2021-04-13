// pages/userCustom/userCustom.js
function Custom(obj) {
  this.obj = obj;
  this.demand = {};
  this.attractions = [];
  this.hasPlay = [];
  this.attractionsInfo = [];
  this.plan = {
    "details": []
  };

  /**
   * 计算旅客游玩的半天数
   */
  this.countDays = function () {
    return this.obj.travelDays / 0.5;
  }

  /**
   * 将已游玩的景点加入hasPlay数组中
   * @param {Array} attractionName 
   */
  this.addHasPlay = function (attractionName) {
    return this.hasPlay.push(attractionName);
  }

  /**
   * 计算景点A到景点B的步行距离
   * @param {String} placeA 景点A
   * @param {String} placeB 景点B
   */
  this.getDistanceByWalking = async function (placeA, placeB) {
    var locationA = "";
    var locationB = "";
    var distance;
    await wx.cloud.callFunction({
      name: "AttractionDAO",
      data: {
        "select": 5,
        "name": placeA
      }
    }).then(res=> {
      locationA += res.result.latitude + "," + res.result.longitude;
    });
    await wx.cloud.callFunction({
      name: "AttractionDAO",
      data: {
        "select": 5,
        "name": placeB
      }
    }).then(res => {
      locationB += res.result.latitude + "," + res.result.longitude;
    });
    
    await wx.serviceMarket.invokeService({
      service: 'wxc1c68623b7bdea7b',
      api: 'directionWalking',
      data: {
        "from": locationA,
        "to": locationB
      },
    }).then(res => {
      distance = res.data.result.routes[0].distance;
      console.log(distance);
    })

    return distance;
  }

  /**
   * 计算旅客所需支付的门票费用
   */
  this.countTicketPrice = function () {
    var price = 0.0;
    return price;
  }

  /**
   * 获取旅客所要游玩的所有景点的信息
   */
  this.getAttractionInfo = function () {

  }

  /**
   * 对游客中意景点进行排序。对attractions进行操作。
   */
  this.sortAttractions = function () {

  }

  /**
   * 对游客的一个半天时间进行规划，返回一个计划对象
   * @param {number} days 旅客计划游玩半天数（以半天为单位）
   * @param {number} remainDays 旅客剩余游玩半天数
   */
  this.makeSmallPlan = function (days, remainDays) {
    var nowDay = days - remainDays;
    var day = {
      nowday: {
        "breakfirst": "",
        "attraction": [],
        "spend_time": 0
      }
    };
    return day;
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const name = new Custom({});
    name.getDistanceByWalking("清明上河园", "包公祠");
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
  formSubmit(e) {
    console.log(e.detail.value);
    // console.log(custom.countDays(e.detail.value.travelDays));
  }
})