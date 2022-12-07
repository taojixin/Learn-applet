// pages/cart/cart.js
Page({
  data() {
    cartText: ''
  },
  onLoad() {
    const app = getApp();
    // 这样他不是响应式的
    this.data.cartText = app.globalData.cartText
    this.setData({
      cartText: this.data.cartText
    })
  }
})