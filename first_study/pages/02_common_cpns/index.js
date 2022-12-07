// pages/02_commom_cpns/index.js
Page({
  data: {
    chooseImageUrl: "",
    viewColors: ['red', 'yellow', "blue", "black", "orange"],
    message: "s"
  },
  getUserInfo(event) {
    wx.getUserProfile({
      desc: 'desc',
      // success: (res) => {
      //   console.log(res);
      // }
    }).then(res => {
      console.log(res);
    })
  },
  getPhoneNumber() {

  },
  onChooseImg() {
    // chooseMediaAPI，具体查看官网
    wx.chooseMedia({
      mediaType: 'image'
    }).then(res => {
      const imagePath = res.tempFiles[0].tempFilePath
      this.setData({chooseImageUrl: imagePath})
    })
  },
  onScrollUpper() {
    console.log("upper");
  },
  onScrollLower() {
    console.log("lower");
  },
  onScroll(event) {
    console.log(event);
    console.log(event.detail);
  }
})