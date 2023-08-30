import Cookies from 'js-cookie'

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let token
    if (!req.headers.cookie) {
      return
    }

    const cookie = req.headers.cookie.split(';').find(
      c => c.trim().startsWith('token=')
    )

    if (cookie) {
      token = cookie.split('=')[1]
    }
    if (token) {
      commit('auth/SET_TOKEN', token)
    }
  },
  nuxtClientInit ({ commit, getters }) {
    const token = Cookies.get('token')
    if (token) {
      console.log(token + 'from cookie')
      commit('auth/SET_TOKEN', token)
    }
  }
}
