// components/c-lifetime/index.js
Component({
  // 组件的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建created");
    },
    attached() {
      console.log("组件被添加到组件树中attached");
    },
    detached() {
      console.log("组件从组件树中被移除detached");
    }
  },
  // 使用该组件的page的生命周期（父组件的生命周期）
  pageLifetimes: {
    show() {
      console.log("page shoe");
    },
    hide() {
      console.log("page hiden");
    }
  }
})
