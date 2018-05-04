// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
post(){wx.showToast({
    title: '发布成功',
    icon: 'success',
    duration: 2000
  })
},

// 上传图片接口
doUpload: function () {
  var that = this

  // 选择图片
  wx.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: function (res) {
      util.showBusy('正在上传')
      var filePath = res.tempFilePaths[0]

      // 上传图片
      wx.uploadFile({
        url: config.service.uploadUrl,
        filePath: filePath,
        name: 'file',

        success: function (res) {
          util.showSuccess('上传图片成功')
          res = JSON.parse(res.data)
          that.setData({
            imgUrl: res.data.imgUrl
          })
        },

        fail: function (e) {
          util.showModel('上传图片失败')
        }
      })

    },
    fail: function (e) {
      console.error(e)
    }
  })
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