// pages/09_learn_api/index.js
import {tjxRequest, tjxReqInstance} from '../../service/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allCities: {},
    houseList: [],
    currentPage: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    // 1.使用requestAPI
    // wx.request({
    //   url: 'http://123.207.32.32:1888/api/city/all',
    //   success: (res) => {
    //     const data = res.data.data
    //     this.setData({allCities: data})
    //   },
    //   fail: (err) => {
    //     console.log("err:", err);
    //   }
    // })
    // wx.request({
    //   url: 'http://123.207.32.32:1888/api/home/houselist',
    //   data: {
    //     page: 1
    //   },
    //   success: (res) => {
    //     this.setData({houseList: res.data.data})
    //     console.log(this.data.houseList);
    //   }
    // })

    // 2.使用封装的tjxResuest
    // tjxRequest({
    //   url: 'http://123.207.32.32:1888/api/city/all'
    // }).then(res => {
    //   this.setData({allCities: res.data})
    // })
    // tjxRequest({
    //   url: 'http://123.207.32.32:1888/api/home/houselist',
    //   data: {
    //     page: 1
    //   }
    // }).then(res => {
    //   this.setData({houseList: res.data})
    // })

    // 3.await/async
    // const cityRes = await tjxRequest({
    //   url: 'http://123.207.32.32:1888/api/city/all'
    // })
    // this.setData({allCities: cityRes.data})
    // const houseRes = await tjxRequest({
    //   url: 'http://123.207.32.32:1888/api/home/houselist',
    //   data: {page: 1}
    // })
    // this.setData({houseList: houseRes.data})

    // 4.将请求封装到一个单独的函数中
    this.getCityData()
    this.getHouseListData()

    // 5.使用类的实例发送请求
    tjxReqInstance.get({
      url: 'city/all'
    }).then(res => {
      console.log(res);
    })
  },
  async getCityData() {
    const cityRes = await tjxRequest({
      url: "http://123.207.32.32:1888/api/city/all"
    })
    this.setData({allCities: cityRes.data})
  },
  async getHouseListData() {
    const houseRes = await tjxRequest({
      url: 'http://123.207.32.32:1888/api/home/houselist',
      data: {page: 1}
    })
    const finalHouseList = [...this.data.houseList, ...houseRes.data]
    this.setData({houseList: finalHouseList})
    this.data.currentPage++
  },
 
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getHouseListData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})