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

export const petitionPost = (url,data) => {
    return axios.post("http://localhost:8080"+url,data)
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
        url: "http://localhost:8080" + url,
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
