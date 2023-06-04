import axios from 'axios'

const apiClient = {
    async loginUser(credentials) {
        try {
            const response = await axios.post('http://localhost:8080/api/login', credentials)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default apiClient