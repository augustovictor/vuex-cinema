import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
});

export const customHeaders = {
    GET: {

    },
    POST: {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    },
    PUT: {
        headers: {
            'content-type': 'application/json'
        }
    },
    DEL: {
        headers: {}
    }
};