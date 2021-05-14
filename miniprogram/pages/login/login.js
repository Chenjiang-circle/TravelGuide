// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse("button.open-type.getUserInfo")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  login(e) {
    // console.log(e);
    var app = getApp();
    app.globalData.userInfo = e.detail.userInfo;
    // console.log(app.globalData.userInfo)
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://localhost:8181/user/test',
            method: "GET",
            data: {
              code: res.code
            },
            success(res) {
              app.globalData.userInfo.openId = res.data.object.openId;
              wx.request({
                url: 'http://localhost:8181/user/getToken',
                method: "POST",
                data: app.globalData.userInfo,
                success(res) {
                  console.log(res);
                  if(res.data.status === "success") {
                    wx.setStorage({
                      data: res.data.object.token,
                      key: 'access-token',
                      success() {
                        wx.switchTab({
                          url: '/pages/index/index'
                        })
                      }
                    })
                  }
                }
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})