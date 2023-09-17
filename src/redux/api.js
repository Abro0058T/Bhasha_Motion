import axios from 'axios';

const Api = axios.create({
    baseURL :"/api"
})

Api.defaults.headers.common['ngrok-skip-browser-warning'] = '404';

export const signUp = (data) => Api.post('/register',data);
export const AdminLogin = (ldata) => Api.post('/login',ldata);
