import axios from 'axios'
const service = axios.create({
  baseURL: 'http://api8.xubei.com',
  timeout: 20000
})
service.interceptors.request.use(
  // config => {
  // 如果有token, 通过token请求头携带token
  // if (store.getters.token) {
  //   config.headers['token'] = getToken()
  // }
  // return config
  // }
)
service.interceptors.response.use(
  response => {
    const { result } = response.data
    return result
    /* 
    code为非20000或200是抛错 可结合自己业务进行修改
    */
    // if (result.code !== 20000 && result.code !== 200) {
    //   Message({
    //     message: result.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   return Promise.reject(new Error(result.message || '未知错误'))
    // }
    //  else {
    //   return result
    // }
  },
  error => {
    console.log('err' + error)
    // 统一显示错误提示
    // Message({
    //   message: error.message || '请求出错了',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // 向下传递错误, 具体的请求右以选择处理或不处理
    return Promise.reject(error)
  }
)
export default service
