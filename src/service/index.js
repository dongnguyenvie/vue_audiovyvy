import axios from 'axios'
const API_BASE_URL = 'http://audiovyvy.local/graphql'

const HQL = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000
})

export { HQL }
