import {tjxRequest} from './index'

export function getMusicBanner(type = 0) {
  return tjxRequest.get({
    url: "/banner",
    data: {
      type
    }
  })
}