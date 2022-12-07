import { hyLoginReqInstance } from "../../service/index"
import { getCode } from '../../service/login'

// pages/12_learn_login/index.js
Page({
  // onLoad登录流程
  async onLoad() {
    // 1.获取token，判断token是否有值
    const token = wx.getStorageSync("token") || ""

    // 2.判断token是否过期
    const res = await hyLoginReqInstance.post({
      url: "/auth",
      header: {
        token: token
      }
    })
    console.log(res);

    // 如果token有值且未过期
    if (token && res.message === "已登录") {
      console.log("请求其他数据");
    } else {
      this.handleLogin();
    }
  },
  async handleLogin(){
    // 1.获取code
    const code = await getCode()

    // 2.使用code换取token
    // 后端通过code去微信服务器换取openId(注意与unionId区分)，后端保存openId作为用户唯一标识，同时生成token
    const res = await hyLoginReqInstance.post({
      url: '/login',
      data: {
        code
      }
    })

    // 保存token
    wx.setStorageSync('token', res.token)
  }
})