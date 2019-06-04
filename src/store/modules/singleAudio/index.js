import * as TYPE from '../../actionTypes'
import * as MODEL from './mode'
import { HQL } from '../../../service'

const state = {
  post: {
  }
}
const getters = {
  [TYPE.GET_POST]: (state) => state.post
}
const mutations = {
  [TYPE.SET_POSTS](state, payload) {
    state.post = payload.post
    console.log(payload.data)
  }
}
const actions = {
  async [TYPE.FETCH_CONTENT_FOR_SINGLE_AUDIO]({ commit }, payload) {
    commit(TYPE.FETCH, null, { root: true })
    try {
      const res = await HQL.post(null, {
        query: MODEL.GET_POST_BY_ID,
        variables: payload
      })
      commit(TYPE.SET_POSTS, res.data.data)
      commit(TYPE.DONE, null, { root: true })
    } catch (error) {
      commit(TYPE.DONE, null, { root: true })
      console.log('err')
    }
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  state,
  mutations
}
