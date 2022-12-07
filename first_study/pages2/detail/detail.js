// pages2/detail/detail.js
Page({
  data: {
    name: "",
    age: 0
  },
  onLoad(options) {
    console.log(options);
    const name = options.name
    const age = options.age
    this.setData({name,age})
  },
  onBackTap() {
    // 1.返回导航
    wx.navigateBack()

    // 2.方式一：给上一级的页面传递数据
    // 2.1 获取上一个页面的实例
    // const pages = getCurrentPages() // 该方法获取到的是页面栈，有多个页面
    // const prePage = pages[pages.length-2]
    // 2.2 通过setData给上一级页面设置数据
    // prePage.setData({message: "呵呵呵"})

    // 3.方式二：回调events的函数
    // 3.1 拿到eventChannel 
    // getOpenerEventChannel: https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#%E9%A1%B5%E9%9D%A2%E9%97%B4%E9%80%9A%E4%BF%A1
    const eventChannel = this.getOpenerEventChannel()
    // 3.2 通过eventChannel回调函数
    eventChannel.emit("backEvent", {name: "back",age: 111})
    eventChannel.emit("tjx", {name: "tjx", age: 18})

  },
  onUnload() {
    // // 2.1 获取上一个页面的实例
    // const pages = getCurrentPages() // 该方法获取到的是页面栈，有多个页面
    // const prePage = pages[pages.length-2]
    // // 2.2 通过setData给上一级页面设置数据
    // prePage.setData({message: "呵呵呵"})
  }
})