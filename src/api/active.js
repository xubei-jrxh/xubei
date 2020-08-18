import axios from 'axios'
const app = axios.create({
  baseURL: '/api',
  timeout: 200000,
})
app.interceptors.response.use(
  response => {

    const { result } = response.data
    return result
  },
  error => {
    console.log('err:' + error)
    return Promise.reject(error)
  }
)
export default app