import axios from 'axios';

export const petition = (url) => {
    return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(`Hay un error: ${error}`);
        });
};