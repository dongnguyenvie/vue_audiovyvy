import * as TYPE from '../../actionTypes'
import * as MODEL from './mode'
import { HQL } from '../../../service'
import _ from 'lodash'

const state = {
  post: {
    audio: [],
    categories: {
      nodes: [
        {
          posts: {
            nodes: []
          }
        }
      ]
    }
  }
}
const getters = {
  [TYPE.GET_POST]: (state) => {
    if (state.post.audioJson) {
      state.post.audio = []
      _.forEach(state.post.audioJson, (v, k) => {
        state.post.audio.push({
          url: v,
          name: k,
          artist: 'Quỷnh is'
        })
      })
    }
    return state.post
  }
}
const mutations = {
  [TYPE.SET_POSTS](state, payload) {
    if (payload.post.audioJson) {
      payload.post.audioJson = JSON.parse(payload.post.audioJson)
    }
    state.post = payload.post
    console.log(payload.data)
  }
}
const actions = {
  async [TYPE.FETCH_CONTENT_FOR_SINGLE_AUDIO]({ commit }, payload) {
    try {
      const res = await HQL.post(null, {
        query: MODEL.GET_POST_BY_ID,
        variables: payload
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
