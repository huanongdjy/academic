import axios from './axios'
import {URL} from '../api/variable'

// 获取首页信息展示
export function getInformationByType(type, pageSize = 5, currentPage = 1) {
  if (type === 'cultivation' || type === 'knowledge') {
    pageSize = 10
  }
  var inputjson = {
    currentPage,
    pageSize,
    type
  }
  return axios({
    url: `${URL}getInformationByType.action`,
    method: 'post',
    data: 'inputjson=' + JSON.stringify(inputjson),
    withCredentials: true
  })
}