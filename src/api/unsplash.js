import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PtrnShP-IwPCr9KqFr9_AmIxeufLnea0g6lHXKZ386E',
    },
});
