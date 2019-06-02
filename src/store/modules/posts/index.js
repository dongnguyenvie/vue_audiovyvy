import * as TYPE from '../../action-types'
import * as MODEL from './model'
import { HQL } from '../../../service'

const state = {
  posts: {}
}
const getters = {
  [TYPE.GET_POSTS_FOR_HOME]: (state) => state.posts
}
const mutations = {
  [TYPE.SET_POSTS](state, posts) {
    state.posts = posts
  }
}
const actions = {
  async [TYPE.FETCH_POSTS_FOR_HOME_PAGE]({ commit }, params) {
    try {
      const res = await HQL.post(null, {
        query: MODEL.GET_POSTS,
        variables: {
          first: 10
        }
      })
      commit(TYPE.SET_POSTS, res.data.data)
    } catch (error) {
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
