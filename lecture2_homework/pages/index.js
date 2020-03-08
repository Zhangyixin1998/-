// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos:[
      {src:'../../images/image1.png'},
      { src: '../../images/image4.png'}
    ],
    infoList:[
      {
        id:"001",
        src:"../../images/name.png",
        content:"姓名：张以欣"
      },
      {
        id:"002",
        src:"../../images/birthday.png",
        content:"出生日期：1998-1-17"
      },
      {
        id:"003",
        src:"../../images/height.png",
        content:"身高：163cm"
      },
      {
        id:"004",
        src:"../../images/weight.png",
        content:"体重：44kg"
      },
      {
        id:"005",
        src:"../../images/location.png",
        content:"籍贯：江苏省无锡市"
      },
      {
        id:"006",
        src:"../../images/wechat.png",
        content:"微信：13921395225"
      }
    ]
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

  }
})