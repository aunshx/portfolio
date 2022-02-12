import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 60000,
})

export default api
