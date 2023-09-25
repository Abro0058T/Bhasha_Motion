import React, { useEffect, useState } from 'react'
import reg from '../assests/i2.png'
import { useNavigate } from "react-router";
import './Login.css'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import logo from '../assests/image 11.png'
import { authlogin } from '../redux/features/AuthSlice';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlenavigate = () =>{
      navigate('/register')
  }
  const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));
  console.log(isAuthenticated);
  useEffect(()=>{
    if(isAuthenticated != false  && isAuthenticated != null){
      navigate('/dashboard');
    }
  },[])

  const [ldata, setldata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setldata({ ...ldata, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  console.log(ldata);

  const handlelogin = async (e) =>{
    e.preventDefault();
    if (ldata.email == "" || ldata.password == "") {
      toast.error("Fill all details")
      return;
    }
    const emailIsValid = isValidEmail(ldata.email);

    if (!emailIsValid) {
      toast.error("Invalid email")
      return;
    }
    
    await dispatch(authlogin({ ldata, navigate }))
  }
  return (
    <div className='Login'>
      <div className='center'>
        <div className='heading'>
        <h2 className='text'><img src={logo} alt="" /></h2>
        </div>
        </div>
        <div className='Lc'>
          <div className='Lc1'>
          <h2>Are You a User?</h2>
                <div className='Rc1f'>
                    <div className='forml'>
                        <label htmlFor="">Email</label>
                        <input type="text" value={ldata.email}
              onChange={handleChange}
              name="email"  />
                        <label htmlFor="">Password</label>
                        <input type="text" value={ldata.password}
              onChange={handleChange}
              name="password" />
                        <button className='create' onClick={handlelogin}>Sign In</button>
                        <h3 className='txt'>Is this your first time?</h3>
                        <button className='googlebtn' onClick={handlenavigate}>Sign In With Google</button> 
                        <button className='signinbtn' onClick={handlenavigate}>Create Account</button> 
                    </div>
                </div>
          </div>
          <div className='Lc2'>
          <img src={reg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Login
