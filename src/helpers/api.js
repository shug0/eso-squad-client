import axios from 'axios'

export const post = (url, payload) => (
  axios.post(url, payload, { withCredentials: true })
)

export const get = (url) => (
  axios.get(url, { withCredentials: true })
)

export default {
  post,
  get
}
