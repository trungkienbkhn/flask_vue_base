import axios from 'axios'

export default axios.create({
  baseURL: 'api',
  validateStatus: status => {
    return status >= 200 && status <= 500
  }
})
