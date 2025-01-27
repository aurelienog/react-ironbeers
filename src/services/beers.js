
import http from './base-api'

const list = () => http.get('/')
  .then((res) => res.data)


  const random = () => http.get('/random')
    .then((res) => res.data)

  const detail = (id) => (http.get(`/${id}`)
    .then((res) => res.data))

    const add = (beer) => (http.post('/new')
    .then((res) => res.data))
  
  export default {
    list,
    random,
    detail,
    add
  }