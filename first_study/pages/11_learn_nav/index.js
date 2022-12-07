// pages/11_learn_nav/index.js
Page({
  data: {
    name: "kobe",
    age: 30,
    message: "哈哈哈"
  },
  onNavTap() {
    const name = this.data.name
    const age = this.data.age

    // 页面导航操作
    wx.navigateTo({
      url: `/pages2/detail/detail?name=${name}&age=${age}`,
      // events：页面间通信接口，用于监听被打开页面发送到当前页面的数据。基础库 2.7.3 开始支持。
      events: {
        backEvent(data) {
          console.log("back:", data);
        },
        tjx(data) {
          console.log("tjx:", data);
        }
      }
    })
  }
})