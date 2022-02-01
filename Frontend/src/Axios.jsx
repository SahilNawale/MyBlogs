import axios from "axios";

const BaseUrl = 'http://localhost/';

const axiosInstance = axios.create({
    baseURL : BaseUrl,
    timeout : 5000,
    headers :{
        Authorization : sessionStorage.getItem('access_token') ? 'Bearer ' + sessionStorage.getItem('access_token') : null,
        'Content-Type' : 'application/json',
        accept : 'application/json',
    }
})

export default axiosInstance