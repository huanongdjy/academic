import axios from './axios'

// 获取首页信息展示
export function getInformationByType(type, pageSize, currentPage) {
  if (type === 'cultivation' || type === 'knowledge') {
    pageSize = 10
  }
  var inputjson = {
    currentPage,
    pageSize,
    type
  }
  return axios({
    url: `getInformationByType.action`,
    method: 'post',
    data: 'inputjson=' + JSON.stringify(inputjson),
    withCredentials: true
  })
}

export function readInformation(id) {
  return axios({
    url: `readInformation.action`,
    data: 'inputjson=' + id,
    method: 'post',
    withCredentials: true
  })
}