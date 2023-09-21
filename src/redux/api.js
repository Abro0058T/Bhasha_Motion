import axios from 'axios';
import { useSelector } from 'react-redux';

const Api = axios.create({
  baseURL :"/api"
})
const Api1 = axios.create({
  baseURL :"https://f2d0-2401-4900-5d85-7992-28db-e993-302f-3a98.ngrok-free.app/"
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
  // const headers = {
  //   'Authorization': `Bearer ${accessToken}`, // Add the access token header
  // };
  let token = accessToken.replace(/^"(.*)"$/, '$1');
  const headers = {
    'Authorization': `Bearer ${token}`, // Add the access token header
  };
  return Api.get('/all_videos', { headers });
}
export const getbyid = (prid) => {
  console.log(prid);
  console.log(accessToken)
  let token = accessToken.replace(/^"(.*)"$/, '$1');
  const headers = {
    'Authorization': `Bearer ${token}`, // Add the access token header
  };
  // console.log(headers)
  console.log(headers)
  return Api.get(`/video/${prid}`,{headers})
}

export const get_status = (accessToken) =>{
  const headers = {
    'Authorization': `Bearer ${accessToken}`, // Add the access token header
  };
  return  Api.get('/video/stats',{headers})
}

export const editbyid = (editeddata) => {
  console.log(editeddata)
  
  const prid = +(editeddata?.prid);
  return Api1.post(`/video/${prid}/edit`,editeddata);
}