import axios from 'axios'

export const post = (url: string, payload: Object) => (
  axios.post(url, payload, { withCredentials: true })
)

export const get = (url: string) => (
  axios.get(url, { withCredentials: true })
)

export default {
  post,
  get
}
