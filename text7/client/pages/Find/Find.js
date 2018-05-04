// pages/Find/Find.js
Page({

  data: {
    lostItem: [
      {
        logo: '../../image/a3.jpg',
        classify: '手机',
        postTime: '2018-04-29',
        retrieve: '请失主联系q:1149856883',
        describe: '在丹青619教室捡到一部手机'
      }, {
        logo: '../../image/a4.jpg',
        classify: '数码配件',
        postTime: '2018-04-28',
        retrieve: '丹青失物招领柜里领取',
        describe:'丹青楼捡到耳机'
      }, {
        logo: '../../image/a6.jpg',
        classify: '其他',
        postTime: '2018-04-27',
        retrieve: '丹青失物招领柜里领取',
        describe: '丹青820捡到，现已放到失物招领柜里'
      }, {
        logo: '../../image/a8.bmp',
        classify: '钥匙',
        postTime: '2018-04-26',
        retrieve: '丹青失物招领柜里领取',
        describe: '丹青楼捡到耳机'
      }, {
        logo: '../../image/glasses.bmp',
        classify: '眼镜',
        postTime: '2018-04-26',
        retrieve: '丹青失物招领柜里领取',
        describe: '丹青楼捡到耳机'
      }, {
        logo: '../../image/phone.jpg',
        classify: '手机',
        postTime: '2018-04-26',
        retrieve: '丹青失物招领柜里领取',
        describe: '拾到手机',
      },
    ]
  },
  toPost:function(){
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },

})