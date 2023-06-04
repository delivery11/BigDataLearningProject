// src/api/index.js
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    loginUser(credentials) {
        return apiClient.post('/api/login', credentials)
    },
    getAllMinorities() {
        return apiClient.get('/api/statistic/all')
    }
}