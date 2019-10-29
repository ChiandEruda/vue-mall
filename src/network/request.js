import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/home/data',
    baseURL: 'http://127.0.0.1:5000',
    timeout: 5000
  })

 
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res.data)
    return res.data
  }, err => {
    console.log(err);
  })

  // 发送拦截过后得到的网络请求
  return instance(config)
}