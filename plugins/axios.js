import axios from 'axios'

export default ({ app, store }) => {
  axios.defaults.baseURL = process.env.apiUrl

  if (process.server) {
    return
  }

  axios.interceptors.request.use((request) => {
    request.baseURL = process.env.apiUrl

    const token = store.getters['auth/token']

    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`
    }

    return request
  })
}
