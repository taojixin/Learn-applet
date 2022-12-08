import {
  tjxRequest
} from './index'

export function getTopMV(offset = 0, limit = 20) {
  return tjxRequest.get({
    url: "/top/mv",
    data: {
      offset,
      limit
    }
  })
}

export function getMVUrl(id) {
  return tjxRequest.get({
    url: "/mv/url",
    data: {
      id
    }
  })
}

export function getMVInfo(mvid) {
  return tjxRequest.get({
    url: "/mv/detail",
    data: {
      mvid
    }
  })
}

export function getMVRelated(id) {
  return tjxRequest.get({
    url: "/related/allvideo",
    data: {
      id
    }
  })
}