// pages/06_learn_event/index.js
Page({
  data: {
    titles: ["手机", "电脑", "iPad", "相机"],
    currentIndex: 0
  },
  // 1.事件的基本使用
  onBtnTap(event) {
    console.log("onBtnTap:", event);
  },
  // 2.event中target和currentTarget的区别
  onOuterViewTap(event) {
    // 1.target触发事件的元素
    // 2.currentTarget处理事件的元素
    console.log("onOuterViewTap：", event);
    console.log(event.target);
    console.log(event.currentTarget);
    // 3.获取自动逸属性name
    const name = event.currentTarget.dataset.name
    console.log(name);
  },
  // 3.event中touches和changeTouches区别
  onTouchTap(event) {
    console.log("tap:", event);
  },
  onLongPress(event) {
    console.log("long:", event);
  },
  onTouchEnd(event) {
    console.log("end", event);
  },
  // 4.event的参数传递
  onArgumentsTap(event) {
    console.log("onArgumentsTap:", event);
    const {
      name,
      age,
      height
    } = event.currentTarget.dataset
    console.log(name, age, height);
  },
  // 5.tab-control案例
  onItemTap(event) {
    const currentIndex = event.currentTarget.dataset.index
    console.log(currentIndex);
    this.setData({currentIndex})
  },
  // 6.捕获和冒泡过程
  onView1CaptureTap() {
    console.log("onView1CaptureTap");
  },
  onView2CaptureTap() {
    console.log("onView2CaptureTap");
  },
  onView3CaptureTap() {
    console.log("onView3CaptureTap");
  },
  onView1Tap() {
    console.log("onView1Tap");
  },
  onView2Tap() {
    console.log("onView2Tap");
  },
  onView3Tap() {
    console.log("onView3Tap");
  },
  // 7.mark的数据传递
  onMarkTap(event) {
    console.log(event);
    const data1 = event.target.dataset
    console.log(data1);

    const data2 = event.mark
    console.log(data2);
  }

})