// pages/07_learn_cpns/index.js
Page({
  data: {
    digitalTitles: ['电脑', '手机', 'iPad']
  },
  // 自定义事件以及传参
  onSectionTitleClick(event) {
    // 通过event.detail获取事件传递的参数
    console.log("区域title发生了点击", event.detail);
  },
  onTabIndexChange(event) {
    const index = event.detail
    console.log("点击了", this.data.digitalTitles[index]);
  },
  // 调用组件中的方法
  onExecTCMethod() {
    // 1.获取对应的组件实例对象
    const tabControl = this.selectComponent(".tab-control")
    // 2.调用组件实例的方法
    tabControl.test(2)
  }
})