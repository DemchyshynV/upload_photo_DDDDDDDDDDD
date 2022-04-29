import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})
export {
    axiosService
}
