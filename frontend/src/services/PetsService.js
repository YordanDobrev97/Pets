import axios from 'axios'
const SERVER_URL = 'http://localhost:5000'

export default {
    getAll: async () => {
        const response = await axios.get(`${SERVER_URL}/api/pet/all`)
        return response
    },
    add: async (name, imageUrl, description) => {
        const response = await axios.post(`${SERVER_URL}/api/pet/new`, {
            name, imageUrl, description
        })
        return response
    },
    getById: async (id) => {
        const response = await axios.get(`${SERVER_URL}/api/pet/${id}`)
        return response
    },
}