import * as TYPE from '../../actionTypes'
import * as MODEL from './model'
import { HQL } from '../../../service'
import _ from 'lodash'

const state = {
  posts: {}
}
const getters = {
  [TYPE.GET_POSTS_FOR_HOME]: (state) => state.posts
}
const mutations = {
  [TYPE.SET_POSTS](state, posts) {
    _.forEach(posts, (data, key) => {
      switch (key) {
        case 'hot':
          data.title = 'TOP TRUYỆN HOT'
          break
        case 'new':
          data.title = 'TRUYỆN MỚI CẬP NHẬP'
          break
        case '_tienhiep':
          data.title = 'TRUYỆN TIÊN HIỆP'
          break
        case '_ma':
          data.title = 'TRUYỆN MA'
          break
        case '_quan_truong':
          data.title = 'TRUYỆN QUAN TRƯỜNG'
          break
        default:
          data.title = 'TITLE'
          break
      }
    })
    console.log(posts)
    state.posts = posts
  }
}
const actions = {
  async [TYPE.FETCH_POSTS_FOR_HOME_PAGE]({ commit }, params) {
    try {
      const res = await HQL.post(null, {
        query: MODEL.GET_POSTS,
        variables: {
          first: 12
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
