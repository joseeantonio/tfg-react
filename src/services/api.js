import axios from 'axios';

export const petition = (url) => {
    return axios.get("https://tfg-backend-production-1acd.up.railway.app"+url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Hay un error: ${error}`);
        });
};

export const petitionPost = (url,data) => {
    return axios.post("https://tfg-backend-production-1acd.up.railway.app"+url,data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Hay un error: ${error}`);
        });
};

export const petitionWithToken = (url, method, data) => {
    const token = localStorage.getItem('token')

    return axios({
        method: method,
        url: "https://tfg-backend-production-1acd.up.railway.app" + url,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: data
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            throw new Error(`Hay un error: ${error}`)
        });
};
