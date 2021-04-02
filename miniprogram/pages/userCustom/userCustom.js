// pages/userCustom/userCustom.js
function Custom(obj) {
  this.obj = obj;
  this.countDays = function () {
    return this.obj.travelDays / 0.5;
  }
}
const custom = {
  /**
   * 计算用户游玩所需要的半天数
   * @param days 
   * @return number类型的值，表示需要花费的半天数
   */
  countDays: function(days) {
    return days/0.5;
  },

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