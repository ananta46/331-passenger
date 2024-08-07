import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPassengers(size: Number, page: Number) {
    return apiClient.get('/passenger?page=' + page + '&size=' + size)
  },
  getPassenger(_id: string) {
    return apiClient.get('/passenger/' + _id)
  }
}
