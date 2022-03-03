import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        'Bypass-Tunnel-Reminder': '2',
    },
});
