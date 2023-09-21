import axios from 'axios';
import { useSelector } from 'react-redux';

const Api = axios.create({
  baseURL :"/api"
})
// const {data} = useSelector((state) => ({ ...state?.auth?.data}));
const isAuthenticated  = localStorage.getItem('auth1');
const accessToken = isAuthenticated;

Api.defaults.headers.common['ngrok-skip-browser-warning'] = '404';

export const signUp = (data) => Api.post('/register',data);
export const AdminLogin = (formData) => Api.post('/login',formData);

export const fetchDataWithAccessToken = (accessToken) => {
    // Define headers with the access token
    const headers = {
      ...Api.defaults.headers.common, // Copy default headers
      'Authorization': `Bearer ${accessToken}`, // Add the access token header
    };
  
    return Api.get('/user_info', { headers });
};

export const getvideos = (accessToken) => {
  const headers = {
    'Authorization': `Bearer ${accessToken}`, // Add the access token header
  };
  return Api.get('/all_videos', { headers });
}
export const getbyid = (prid) => Api.get(`/video/${prid}`)
export const get_status = (accessToken) =>{
  console.log(accessToken)
  const headers = {
    'Authorization': `Bearer ${accessToken}`, // Add the access token header
  };
  return  Api.get('/video/stats',{headers})
}

export const editbyid = (editeddata) => {
  console.log(editeddata);
  const headers = {
    'Authorization': `Bearer ${accessToken}`, // Add the access token header
  };
  return Api.get(`/video/${editeddata?.prid}/edit`, { headers },editeddata);
}