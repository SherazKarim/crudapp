import axios from 'axios'

export const newRequest = axios.create({
    // baseURL:"http://localhost:8800/api/",
    baseURL:"https://crudapp-production-db62.up.railway.app/api/",
    // withCredentials:true
})