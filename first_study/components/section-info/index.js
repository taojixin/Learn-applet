// components/section-info/index.js
Component({
  data: {

  },
  // 父组件向子组件传参
  properties: {
    title: {
      type: String,
      value: '默认标题'
    },
    content: {
      type: String,
      value: "默认内容"
    }
  },
  // 父组件给子组件传样式
  externalClasses: ["info"],
  methods: {
    onTitleTap() {
      console.log("title被点击了");
      // 向父组件发送样式
      this.triggerEvent("titleclick", "aaa")
    }
  }
})
