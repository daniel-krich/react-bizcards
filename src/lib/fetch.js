import axios from 'axios';

export const getFetch = (url) => axios.get(url, {
    method: 'GET',
});

export const postFetch = (url, data) => axios.get(url, {
    method: 'POST',
    data: data
});