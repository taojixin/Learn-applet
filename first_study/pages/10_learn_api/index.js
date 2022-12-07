// pages/10_learn_api/index.js
Page({
  // 1.弹窗相关API
  onShowToast() {
    wx.showToast({
      title: '购买失败！',
      icon: 'error',
      // 提示的延迟时间
      duration: 5000,
      mask: true,
      success: (res) => {
        console.log("res:", res);
      },
      fail: (err) => {
        console.log("err: ", err);
      }
    })
  },
  onShowModal() {
    wx.showModal({
      title: "确定购买吗？",
      content: "确定购买的话，你的有钱！",
      confirmColor: "#f00",
      cancelColor: "#0f0",
      showCancel: true,
      // editable:true,
      success: res => {
        if (res.cancel) {
          console.log("用户点击取消");
        } else if (res.confirm) {
          console.log("用户点击了确定");
          console.log(res.content);
        }
      }
    })
  },
  onShowAction() {
    wx.showActionSheet({
      alertText: "请选择",
      itemColor: "#f0f",
      itemList: ["a", "b", "c"],
      success: (res) => {
        console.log(res.tapIndex);
      },
      fail: err => {
        console.log("err: ", err);
      }
    })
  },
  // 2.分享功能  https://developers.weixin.qq.comminiprogramdev/reference/api/Pagehtml#onShareAppMessage-Object-object
  onShareAppMessage() {
    return {
      title: "分享标题",
      path: '/pages/favor/favor',
      imageUrl: "/assets/nhlt.jpg"
    }
  },

  // 3.获取用户的设备信息
  onGetSystemInfo() {
    // 3.1 获取手机的基本信息
    // https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfo.html
    // wx.getSystemInfo({
    //   success: res => {
    //     console.log(res);
    //   }
    // })

    // 3.2 获取当前位置信息
    wx.getLocation({
      success: res => {
        console.log(res);
      }
    })
  },

  // 4.本地存储方式
  onLocalStorage() {
    // 4.1 存储一些键值对
    // wx.setStorageSync('name', "tjx")
    // wx.setStorageSync('age', 18)
    // wx.setStorageSync('friend', ["ta","ta"])

    // 4.2 获取storage中的内容
    // const name = wx.getStorageSync('name')
    // const age = wx.getStorageSync('age')
    // const friend = wx.getStorageSync('friend')
    // console.log(name, age, friend);

    // 4.3 删除storage中的内容
    // wx.removeStorageSync('name')

    // 4.4 清空storage中的内容
    // wx.clearStorageSync()

    // 4.5 异步操作（上面的为同步操作）
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html
    wx.setStorage({
      key: "books",
      data: "hahah",
      encrypt: true,
      success: res => {
        wx.getStorage({
          key: 'books',
          encrypt: true,
          success: res => {
            console.log(res);
          }
        })
      }
    })
    console.log(">>>>>");
  }
})