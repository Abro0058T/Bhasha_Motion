import axios from 'axios';

const Api = axios.create({
    baseURL :"https://7eec-2409-40d0-10cd-c36f-4cd1-800e-73df-f372.ngrok-free.app/"
    // baseURL :"http://localhost:5000/"
})

Api.defaults.headers.common['ngrok-skip-browser-warning'] = '404';

export const signUp = (data) => Api.post('/register',data);
export const AdminLogin = (ldata) => Api.post('/login',ldata);
