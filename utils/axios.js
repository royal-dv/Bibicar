import axios from 'axios'
import alert from './alert'
import SocketService from './socket'

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/admin`,
  timeout: 120000
})

const errorHandler = (error) => {
  if (error?.response?.status === 401) {
    localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, '')
    SocketService.close()
    window.location.replace('/')
  }
  return Promise.reject(error)
}

const resHandler = (response) => {
  let { data } = response

  if (data.error) {
    alert.error(data.error.message)
    return Promise.reject(data.error)
  }

  return Promise.resolve(data)
}

const reqHandler = (config) => {
  config.headers['Authorization'] = 'Bearer ' + localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
  return config
}

axiosInstance.interceptors.request.use(reqHandler)
axiosInstance.interceptors.response.use(resHandler, errorHandler)

export default axiosInstance
