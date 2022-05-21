import apiClient from './client'

const register = (userInfo) => {
  return apiClient.post('/users', userInfo)
}

export default { register }
