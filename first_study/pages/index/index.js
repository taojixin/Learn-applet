// index.js

Page({
  data: {
    pages: [
      {name: "01_注册界面", path: "/pages/01_register/01_register"},
      {name: "02_常见组件", path: "/pages/02_common_cpns/index"},
      {name: "03_学习WXSS", path: "/pages/03_learn_wxss/index"},
      {name: "04_学习wxml", path: "/pages/04_learn_wxml/index"},
      {name: "05_学习wxs", path: "/pages/05_learn_wxs/index"},
      {name: "06_学习event", path: "/pages/06_learn_event/index"},
      { name: "07_学习组件化", path: "/pages/07_learn_cpns/index" },
      { name: "08_学习组件化2", path: "/pages/08_learn_slot/index" },
      { name: "09_学习网络请求", path: "/pages/09_learn_network/index" },
      { name: "10_学习系统API", path: "/pages/10_learn_api/index" },
      { name: "11_学习页面导航", path: "/pages/11_learn_nav/index" },
      { name: "12_学习登录流程", path: "/pages/12_learn_login/index" },
      
    ]
  },
  onBtnClick(event) {
    const item = event.target.dataset.item
    // navigateTo：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
    wx.navigateTo({
      url: item.path,
    })
  }
})
