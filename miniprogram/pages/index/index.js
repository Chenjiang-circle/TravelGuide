Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipper_data: [],   // 页面顶部导航栏中的图片地址
    hot_plan: [],       // 热门路线信息
    hot_attraction: []  // 热门景点信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    if (app.globalData.userInfo) {
      console.log("yes");
    } else {
      wx.showModal({
        title: "登录提醒",
        content: "您尚未登录，请点击确定前往登录页面",
        showCancel: false
      }).then(res => {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      })
    }
    
    
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
    var _this = this
    wx.getStorage({
      key: 'access-token',
    }).then(res => {
      wx.request({
        url: 'http://localhost:8181/attraction/getAllAttractions/' + res.data,
        method: "GET",
        success(res) {
          console.log(res);
          _this.setData({
            hot_attraction: res.data.object.attractions.slice(0, 3)
          })
        }
      })
    })
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
  routePlan() {
    let plugin = requirePlugin('routePlan');
    let key = '57CBZ-JHVRS-LDNO6-6KI3P-JV25O-EDBCB'; //使用在腾讯位置服务申请的key
    let referer = 'travel'; //调用插件的app的名称
    let endPoint = JSON.stringify({ //终点
      'name': '清明上河园',
      'latitude': 34.815321,
      'longitude': 114.347061
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  navigateToInfo(res) {
    console.log(res)
    // 跳转到景点详情页面
    var url = "/pages/attractions/attractions?id=" + res.currentTarget.dataset.index;
    wx.navigateTo({
      url: url,
    });
  },
  toAcctractionList() {
    // 跳转到景点列表页面
    wx.navigateTo({
      url: "/pages/attractionList/attractionList",
    });
  }
})