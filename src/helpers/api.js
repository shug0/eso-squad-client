import fetch from 'isomorphic-fetch'

export const post = (url, payload) => (
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
)

export default {
  post,
  get: fetch
}
