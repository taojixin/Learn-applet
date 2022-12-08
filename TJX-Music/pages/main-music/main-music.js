// pages/main-music/main-music.js
import {getMusicBanner} from '../../services/music'
import querySelect from '../../utils/query-select'

import tjxthrottle from "../../utils/throttle"
const querySelectThrottle = tjxthrottle(querySelect, 100)

Page({
  data: {
    banners: [],
    bannerHeight: 150
  },
  onLoad() {
    this.fetchMusicBanner()
  },
  // 网络请求
  async fetchMusicBanner() {
    const res = await getMusicBanner()
    this.setData({banners: res.banners})
  },
  // 监听页面点击事件
  onSearchClick() {
    wx.navigateTo({
      url: '/pages/detail-search/detail-search',
    })
  },
  // 获取图片高度的方法
  onBannerImageLoad(event) {
    // 获取image组件的高度
    querySelectThrottle(".banner-image").then(res => {
      this.setData({bannerHeight: res[0].height})
    })
  },
  // 点击更多
  onRecommendMoreClick() {
    console.log("点击了更多");
  }
})