import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
})