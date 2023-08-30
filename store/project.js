import axios from 'axios'

export const state = () => ({
  projectList: []
})

export const getters = {
  projectList: state => state.projectList
}

export const mutations = {
  SET_PROJECT_LIST (state, projectList) {
    state.projectList = projectList
  }
}

export const actions = {
  async fetchProjectList ({ commit }) {
    try {
      const { data } = await axios('/projects-manage/index?filters[is_active]=1&sort=dta_create')
      commit('SET_PROJECT_LIST', data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }
}
