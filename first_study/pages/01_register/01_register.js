// pages/01_register/01_register.js
Page({
  data: {
    banners: [],
    recommends: [],

    // 作用二：初始化定义本地数据
    counter: 100,

    btns: ["red", "blue", "green", "orange"]
  },
  onLoad() {
    // 作用一：发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        const data = res.data.data
        const banners = data.banner.list
        const recommends = data.recommend.list
        this.setData({banners,recommends})
        console.log(data)
      }
    })
    
  },
  // 作用三：绑定事件
  onBtnClick1() {
    console.log("绑定事件");
  },
  onBtnClick(event) {
    console.log(event.target.dataset.color);
  },
  // 其他事件
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },
  onReachBottom() {
    console.log("onReachBottom");
  },
  onPageScroll(event) {
    console.log("onPageScroll", event);
  }
})