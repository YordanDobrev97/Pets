import axios from 'axios'
const SERVER_URL = `http://localhost:5000`

export default {
    register: async (email, username, password) => {
        const response = await axios.post(`${SERVER_URL}/api/auth/signup`,
            {
                email: email,
                username: username,
                password: password
            })

        return response;
    },
    login: async (email, username, password) => {
        const response = await axios.post(`${SERVER_URL}/api/auth/signin`,
            {
                email: email,
                username: username,
                password: password
            })

        return response;
    },
    adopt: async (petId, userId) => {
        const response = await axios.post(`${SERVER_URL}/api/user/adoption`, {
            petId, userId
        })
        return response
    }
}