import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 1000,
})
// 请求拦截器 interceptor
service.interceptors.request.use((config) => {
  // config是发送请求的配置对象，必须处理完，返回这个配置对象

  // 开启进度条
  // NProgress.start();
  return config
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
    // return response
  },
  (error) => {
    alert('请求出错' + error.message || '未知错误')
    return new Promise(() => {})
  }
)

export default service
