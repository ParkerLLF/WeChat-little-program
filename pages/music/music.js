// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: [
      'https://dwz.cn/mrNAnuQi',
      'https://dwz.cn/gvDL4FS7',
      'https://dwz.cn/gHL7PlJf',
      'https://dwz.cn/cGPd8SOx',
      'https://dwz.cn/NDvnDOzt',
      'https://dwz.cn/dhHn6P0B',
      'https://dwz.cn/hztFoiVj',
      'https://dwz.cn/gEehIluk',
      'https://dwz.cn/MABa8o5v',
    ],
    imgUrls: [
      'https://dwz.cn/mrNAnuQi',
      'https://dwz.cn/gvDL4FS7',
      'https://dwz.cn/gHL7PlJf',
      'https://dwz.cn/cGPd8SOx',
      'https://dwz.cn/NDvnDOzt',
      'https://dwz.cn/dhHn6P0B',
      'https://dwz.cn/hztFoiVj',
      'https://dwz.cn/gEehIluk',
      'https://dwz.cn/MABa8o5v',
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  //显示大图
  preImage: function(options) {
    //获得点击图片的下标
    let index = options.currentTarget.dataset.img;
    //获得当前的图片数组
    let music = this.data.music;
    //显示大图
    wx.previewImage({
      current: music[index],
      urls: music
    })
  },

  // 拨打电话
  phonecall: function() {
    wx.makePhoneCall({
      phoneNumber: '18881206041' //仅为示例，并非真实的电话号码
    })
  },

  // 地图功能
  map: function() {
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function(res) {
        wx.openLocation({ //使用微信内置地图查看位置。
          latitude: 30.629862, //要去的纬度-地址
          longitude: 104.073908, //要去的经度-地址
          name: "成都左席音乐文化传媒有限公司",
          address: '磨子街7号新棕北商务大厦',
        })
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },



})