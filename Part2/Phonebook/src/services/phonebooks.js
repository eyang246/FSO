import axios from 'axios'
const baseUrl = 'https://phonebook-backend-xm28.onrender.com/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (name, newObject) => {
  const request = axios.put(`${baseUrl}/${name}`, newObject)
  return request.then(response => response.data)
}

const remove = (name, newObject) => {
  const request = axios.delete(`${baseUrl}/${name}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove, }