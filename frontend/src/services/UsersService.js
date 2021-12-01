import axios from 'axios'
const SERVER_URL = `https://pets-typescript-api.herokuapp.com`

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
    },
    returnToShelter: async (petId) => {
        const response = await axios.post(`${SERVER_URL}/api/user/returnToShelter`, {
            petId
        })
        return response
    },
    getPets: async (userId) => {
        const response = await axios.get(`${SERVER_URL}/api/user/pets/${userId}`)
        return response
    }

}