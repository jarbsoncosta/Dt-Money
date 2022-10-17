import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://3.83.95.50:5000/api/',
  baseURL: 'http://localhost:3333/api/',
})
