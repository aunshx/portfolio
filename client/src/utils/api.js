import axios from 'axios'

const api = axios.create({
    baseURL: '/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 60000,
})

export default api
