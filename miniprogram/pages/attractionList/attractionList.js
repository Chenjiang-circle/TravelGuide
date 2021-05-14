// pages/attractionList/attractionList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attractions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.getStorage({
      key: 'access-token'
    }).then(res => {
      wx.request({
        url: 'http://localhost:8181/attraction/getAllAttractions/' + res.data,
        method: "GET",
        success(res) {
          console.log(res)
          _this.setData({
            attractions: res.data.object.attractions
          })
        }
      })
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

  },
  navigateToInfo(res) {
    // 跳转到景点详情页面
    var url = "/pages/attractions/attractions?id=" + res.currentTarget.dataset.index;
    wx.navigateTo({
      url: url,
    })
  }
})