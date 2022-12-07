// 封装成函数
export function tjxRequest(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...option,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        console.log("err:", err);
      }
    })
  })
}

// 封装成实例
class TJXRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  request(options) {
    const {url} = options
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseURL + url,
        success: (res) => {
          resolve(res.data)
        },
        fail: err => {
          console.log("err:", err);
        }
      })
    })
  }
  get(options) {
    return this.request({...options, method: "get"})
  }
  post(options) {
    return this.request({...options, method: "post"})
  }
}

export const tjxReqInstance = new TJXRequest("http://123.207.32.32:1888/api/")
export const hyLoginReqInstance = new TJXRequest("http://123.207.32.32:3000")