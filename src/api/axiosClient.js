import axios from "axios";

const axiosClient = axios.create({
   baseURL: 'https://api.cityhero.es'
   //baseURL: 'https://reqres.in/api'
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
    const res = await axiosClient.post('/auth/login', payload)

    return res.data;
}

export const getMissions = async() => {
    //const res = await axiosClient.get('/groups/own/missions');
    const res = await axiosClient.get('/unknown');
    return res.data.data;
}

export const getReports = async() => {
    //const res = await axiosClient.get('/groups/own/missions');
    const res = await axiosClient.get('/unknown');
    return res.data.data;
}

export const getReportsByMission = async(idMission) => {
    //const res = await axiosClient.get('/groups/own/missions');
    const res = await axiosClient.get('/unknown/2');
    return res.data.data;
}