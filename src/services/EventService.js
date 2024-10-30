import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'my-json-server.typicode.com/{yutaasakura96}/{world-vue}/events',
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}