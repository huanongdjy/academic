import axios from './axios'

// 获取首页信息展示
export function getInformationWithPage (type, pageSize = 5, currentPage = 1) {
  if (type === 'cultivation' || type === 'knowledge') {
    pageSize = 10
  }
  var inputjson = {
    currentPage,
    pageSize,
    type
  }
  return axios({
    url: '/getInformationWithPage',
    data: inputjson,
    // data: inputjson,
    method: 'post',
    withCredentials: true
  })
  // .then(response => {
  //   console.log('返回消息')
  //   console.log(response.data)
  // })
  // .catch(e => {
  //   console.log('错误消息')
  //   console.log(e)
  // })
}

export function readInformation (id) {
  return axios({
    url: `readInformation.action`,
    data: 'inputjson=' + id,
    method: 'post',
    withCredentials: true
  })
}

export function search (type, title) {
  var inputjson = {
    type,
    title
  }
  return axios({
    url: 'search',
    data: inputjson,
    method: 'post',
    withCredentials: true
  })
}
