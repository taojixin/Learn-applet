// pages/main-music/main-music.js
import {getMusicBanner, getPlaylistDetail, getSongMenuList} from '../../services/music'
import querySelect from '../../utils/query-select'
import recommendStore from "../../store/recommendStore"
import rankingStore from '../../store/rankingStore'

import tjxthrottle from "../../utils/throttle"
const querySelectThrottle = tjxthrottle(querySelect, 100)

const app = getApp()

Page({
  data: {
    screenWidth: 375,
    bannerHeight: 150,
    // 轮播图数据
    banners: [],
    recommendSongs: [],
    hotMenuList: [],
    recMenuList: [],
    // 巅峰榜数据
    rankingInfos: {}
  },
  onLoad() {
    // 从globalData中获取屏幕尺寸
    this.setData({screenWidth: app.globalData.screenWidth})

    // 获取数据
    this.fetchMusicBanner()
    this.fetchSongMenuList()

    // 发起action
    recommendStore.onState("recommendSongs", this.handleRecommendSongs)
    recommendStore.dispatch("fetchRecommendSongsAction")
    rankingStore.onState("newRanking", this.handleNewRanking)
    rankingStore.onState("originRanking", this.handleOriginRanking)
    rankingStore.onState("upRanking", this.handleUpRanking)
    
    rankingStore.dispatch("fetchRankingDataAction")
  },
  // 网络请求
  async fetchMusicBanner() {
    const res = await getMusicBanner()
    this.setData({banners: res.banners})
  },
  async fetchRecommendSongs() {
    const res = await getPlaylistDetail(3778678)
    const playlist = res.playlist
    const recommendSongs = playlist.tracks.slice(0,6)
    this.setData({recommendSongs})
  },
  async fetchSongMenuList() {
    getSongMenuList().then(res => {
      this.setData({hotMenuList: res.playlists})
    })
    getSongMenuList("华语").then(res => {
      this.setData({recMenuList: res.playlists})
    })
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
    wx.navigateTo({
      url: '/pages/detail-song/detail-song',
    })
  },



   // ====================== 从Store中获取数据 ======================
   handleRecommendSongs(value) {
    if (!value.tracks) return
    this.setData({ recommendSongs: value.tracks.slice(0, 6) })
  },
  handleNewRanking(value) {
    // console.log("新歌榜:", value);
    if (!value.name) return
    this.setData({ isRankingData: true })
    const newRankingInfos = { ...this.data.rankingInfos, newRanking: value }
    this.setData({ rankingInfos: newRankingInfos })
  },
  handleOriginRanking(value) {
    // console.log("原创榜:", value);
    if (!value.name) return
    this.setData({ isRankingData: true })
    const newRankingInfos = { ...this.data.rankingInfos, originRanking: value }
    this.setData({ rankingInfos: newRankingInfos })
  },
  handleUpRanking(value) {
    // console.log("飙升榜:", value);
    if (!value.name) return
    this.setData({ isRankingData: true })
    const newRankingInfos = { ...this.data.rankingInfos, upRanking: value }
    this.setData({ rankingInfos: newRankingInfos })
  },
  
  onUnload() {
    recommendStore.offState("recommendSongs", this.handleRecommendSongs)
    rankingStore.offState("newRanking", this.handleNewRanking)
    rankingStore.offState("originRanking", this.handleOriginRanking)
    rankingStore.offState("upRanking", this.handleUpRanking)
  }
})