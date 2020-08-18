import axios from 'axios'
const serve = axios.create({
  baseURL: '/zzx',
  timeout: 20000,

})
serve.interceptors.response.use(
  response => {
    const { data } = response.data
    return data
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default serve