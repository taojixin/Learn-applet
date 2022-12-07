// app.js
App({
  // 作用一：判断打开场景
  onLaunch(options) {
    // console.log(options);

    // 作用三：在生命周期函数中完成应用程序启动后的初始化操作
    // （1）比如登录操作
    // （2）比如读取本地数据（类似token,然后保存在全局方便使用）
    // （3）比如请求整个应用程序需要的数据
    // 例如：
    // 从本地获取token/userInfo
    // const token = wx.getStorageSync('token')
    // const userInfo = wx.getStorageSync("userInfo")
    // 进行登录操作（逻辑判断）将登录成功后的数据保存到storage
    // if(!token || !userInfo) {
    //   wx.setStorageSync('token', "kobetoken")
    //   wx.setStorageSync("userInfo", { nickName: 'kobe', level: 100})
    // }
    // 将获取到的数据保存到globalData中
    // this.globalData.token = token
    // this.globalData.userInfo = userInfo
  },
  onShow(options) {
    // options.scene：从什么场景进来的
    // console.log(`小程序从${options.scene}进来的！`);
  },
  onHide(options) {
    // console.log("小程序被切到了后台");
  },
  // 作用二：定义全局App数据，定义的数据可以在其他任何页面使用（注意这里的数据不是响应式的）
  globalData: {
    userInfo: {},
    cartText: 'hello world'
  }
})
