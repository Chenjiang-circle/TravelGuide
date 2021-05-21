// pages/userCustom/userCustom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attractionNames: [],
    attractionGroupByType: [],
    currentDate: new Date().getTime(),
    formatCurrentDate: "",
    snacks: [],
    hotelTypes: [],
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 首先获取所有的类型
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
    wx.request({
      url: 'http://localhost:8181/attraction/getAttractionType',
      method: "GET",
      success(res) {
        // console.log(res)
        _this.setData({
          attractionNames: res.data.object.attractionType
        });
        wx.request({
          url: 'http://localhost:8181/attraction/getAttractionByTypes',
          method: "POST",
          data: _this.data.attractionNames,
          success(res) {
            // console.log(res);
            _this.setData({
              attractionGroupByType: res.data.object.attractionList
            })
          }
        })
      }
    })
    wx.request({
      url: 'http://localhost:8181/snack/getAllSnack',
      method: "GET",
      success(res) {
        _this.setData({
          snacks: res.data.object.snacks
        })
      }
    })
    wx.request({
      url: 'http://localhost:8181/hotel/getHotelType',
      method: "GET",
      success(res) {
        console.log(res);
        _this.setData({
          hotelTypes: res.data.object.types
        })
      }
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
  formSubmit: function (e) {
    console.log(e.detail.value);
    wx.showLoading({
      title: '正在订制旅行',
      mask: true
    })
    wx.getStorage({
      key: 'access-token',
    }).then(res => {
      wx.request({
        url: 'http://localhost:8181/plan/demand/' + res.data,
        method: "POST",
        data: e.detail.value,
        success(res) {
          console.log(res.data.status)
        }
      })
      wx.hideLoading()
    })

  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  confirm(event) {
    var _date = new Date(this.data.currentDate);
    var year = _date.getFullYear();
    var month = _date.getMonth() + 1;
    var day = _date.getDate()
    this.setData({
      formatCurrentDate: year + "年" + month + "月" + day + "日"
    })
  }
})