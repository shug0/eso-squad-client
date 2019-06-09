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
    .then(response => response.text())
    .then((data) => data ? JSON.parse(data) : {})
)

export default {
  post,
  get: (url) => fetch(url)
    .then(response => response.text())
    .then((data) => data ? JSON.parse(data) : {})
}
