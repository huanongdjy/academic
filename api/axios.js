import axios from 'axios'
// import Qs from 'qs'

// import cookie from '../../static/js/cookie.js'

// axios默认配置
axios.defaults.timeout = 10000 //  超时时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.post['Content-Type'] = 'text/plain'
axios.defaults.baseURL = 'http://localhost:8083' //   默认地址

// 整理数据
// axios.defaults.transformRequest = function (data) {
//   // data = Qs.stringify(data)
//   data = JSON.stringify(data)
//   console.log(data)
//   return data
// }

// 路由请求拦截
// http request 拦截器
// axios.interceptors.request.use((config) => {
//   // 在发送请求之前做某件事
//   if (config.method === 'post') {
//     // config.data = qs.stringify(config.data)
//     console.log('post方法')
//   }
//   return config
// },
// (error) => {
//   // _.toast('错误的传参', 'fail')
//   console.log('post方法，错误')
//   return Promise.reject(error)
// })
// cookise 参考文献https://blog.csdn.net/weixin_41321101/article/details/81076873
// axios.interceptors.request.use(
//   config => {
//     //config.data = JSON.stringify(config.data)
//     config.headers['Content-Type'] = 'application/json;charset=UTF-8'
//     //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
//     if (cookie.get("token")) {
//         //用户每次操作，都将cookie设置成2小时
//         cookie.set("token",cookie.get("token") ,1/12)
//         cookie.set("name",cookie.get("name") ,1/12)
//         config.headers.token = cookie.get("token")
//         config.headers.name= cookie.get("name")
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error.response);
//   });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode === '404') {
      // console.log("response.data.resultCode是404")
      // 返回 错误代码-1 清除ticket信息并跳转到登录页面
    //  cookie.del("ticket")
    //  window.location.href='http://login.com'
      // return
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error.response)// 返回接口返回的错误信息
  })

// export function post (url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data)
//       .then(response => {
//         console.log('使用post')
//         resolve(response.data)
//       }, err => {
//         reject(err)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }
export default axios

// export function fetch (url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//         resolve(response.data)
//       }, err => {
//         reject(err)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }
