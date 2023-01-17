import { getSongMenuList, getSongMenuTag } from "../../services/music"

// pages/detail-menu/detail-menu.js
Page({
  data: {
    songMenus: []
  },
  onLoad() {
    this.fetchAllMenuList()
  },
  async fetchAllMenuList() {
    // 1.获取tags
    const tagRes = await getSongMenuTag()
    const tags = tagRes.tags
    // 2.根据tags去获取对应的歌曲
    const allPromise = []
    for (const tag of tags) {
      const promise = await getSongMenuList(tag.name)
      allPromise.push(promise)
    }
    // 3.获取到所有的数据之后，调用一次setData
    Promise.all(allPromise).then(res => {
      this.setData({songMenus: res})
    })
  }
})