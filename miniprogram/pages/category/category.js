// miniprogram/pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "message":"留言",
    "id":"",
    "goodsList":[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log("onLoad------")
    wx.request({
      url: 'http://localhost:8001/api/payment/1',
      success:(res) =>{
        //JSON.stringIfy()
        console.log("res = "+res.data.data.id)
        const data = res.data.data.id
        this.setData({
          id:res.data.data.id
        })
      }
    })

    wx.request({
      url: 'http://localhost:8001/api/goodsList',
      success:(res) =>{
        console.log("goodsList = "+res.data)
        const data = res.data
        this.setData({goodsList:data})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady------")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow------")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide------")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload------")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh------")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom------")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage------")
  },

  //3.监听绑定的事件
  handleBtnClink:function(){
      console.log("按钮被点击了")
  },
  onPageScoll(obj){
    console.log(obj)
  }
})