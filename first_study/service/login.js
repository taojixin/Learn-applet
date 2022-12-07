
export function getCode() {
  return new Promise((resolve, reject) => {
    // 获取code
    wx.login({
      success: (res) => {
        resolve(res.code)
      },
    })
  })
}