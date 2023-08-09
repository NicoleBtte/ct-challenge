import axios from "axios";

const axiosClient = axios.create({
   //baseURL: 'https://api.cityhero.es.'
   baseURL: 'https://reqres.in/api'
});

axiosClient.interceptors.request.use((config) => {
    const access_token = localStorage.getItem("TOKEN");

    if(config.url !== "/login"){
        config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
});

export const login = async(data) => {
    
    const payload = {
        "email": data.email,
        "password": data.password
    }
    const res = await axiosClient.post('/login', payload)
    //return res.data;
    return res;
}

export const getMissions = async() => {
    const res = await axiosClient.get('/groups/own/missions');
    return res.data;
}

export const getReports = async() => {
    const res = await axiosClient.get('/groups/own/missions');
    return res.data;
}