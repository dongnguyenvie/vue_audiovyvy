import axios from 'axios'
import $bus from '@/_eventBus'

const API_BASE_URL = 'https://audiovyvy.com/graphql'

const HQL = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000
})
HQL.interceptors.request.use(
  function(config) {
    $bus.$emit('loading', true)
    // Do something before request is sent
    return config
  },
  function(error) {
    $bus.$emit('loading', true)
    // Do something with request error
    return Promise.reject(error)
  }
)
HQL.interceptors.response.use(
  function(response) {
    $bus.$emit('loading', false)
    return response
  },
  function(error) {
    $bus.$emit('loading', false)
    return Promise.reject(error.response)
  }
)

export { HQL }
