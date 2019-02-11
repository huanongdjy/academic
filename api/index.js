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
  console.log('JSON.stringify(inputjson): ' + JSON.stringify(inputjson))
  return axios({
    url: '/getInformationWithPage',
    data: inputjson,
    contentType : "application/json;charset=utf-8",
    // data: inputjson,
    method: 'post',
    withCredentials: true
  })
    .then(response => {
      console.log('返回消息')
      console.log(response.data)
    })
    .catch(e => {
      console.log('错误消息')
      console.log(e)
    })
}

export function readInformation (id) {
  return axios({
    url: `readInformation.action`,
    data: 'inputjson=' + id,
    method: 'post',
    withCredentials: true
  })
}
