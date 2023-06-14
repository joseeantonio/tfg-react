import axios from 'axios';

export const petition = (url) => {
    return axios.get("http://localhost:8080"+url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Hay un error: ${error}`);
        });
};

export const petitionWithToken = (url, method) => {
    const token = localStorage.getItem('token')

    return axios({
        method: method,
        url: "http://localhost:8080" + url,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            throw new Error(`Hay un error: ${error}`)
        });
};
