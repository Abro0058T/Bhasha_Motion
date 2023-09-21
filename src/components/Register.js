import React, { useEffect, useState } from 'react'
import './Register.css'
import { useNavigate } from "react-router";
import reg from '../assests/i1.png'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import { register } from '../redux/features/AuthSlice';
const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlenavigate = () =>{
        navigate('/login')
    }
    const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));
    console.log(isAuthenticated);
    useEffect(()=>{
      if(isAuthenticated != false && isAuthenticated != null ){
        navigate('/dashboard');
      }
    },[])

    const [data,setdata] = useState({
        first_name:"",
        last_name:"",
        email:"",
        aadhaar_no:"",
        password:"",
        confirm_password:"",
    })

    const handlechange = (e) =>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    console.log(data);

    const handlesubmit = async (e) =>{
        e.preventDefault();
        if(data?.first_name == '' || data?.last_name == "" || data?.email == "" || data?.aadhaar_no == "" || data?.password == "" || data?.confirm_password == ""){
            toast.error("Fill all details");
            return ;
        }
        if(data?.password.length < 8){
            toast.error("Password length less than 8");
            return;
        }
        console.log("hii")
        await dispatch(register({data,navigate}))
    }

  return (
    <div className='Register'>
        <div className='center'>
        <div className='heading'>
        <h2 className='text'>GLOCAL EDITS</h2>
        </div>
        </div>
        <div className='Rc'>
            <div className='Rc1'>
                <h2>Is this your first visit?</h2>
                <div className='Rc1f'>
                    <div className='form'>
                        <div className='name'>
                        <div className='fname'>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="first_name" value={data.first_name} onChange={handlechange}/>
                        </div>
                        <div className='lname'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name='last_name' value={data.last_name} onChange={handlechange}/>
                        </div>
                        </div>
                        <label htmlFor="">Email</label>
                        <input type="text" name='email' value={data.email} onChange={handlechange}/>
                        <label htmlFor="">Aadhar Number</label>
                        <input type="text" name='aadhaar_no' value={data.aadhaar_no} onChange={handlechange}/>
                        <label htmlFor="">Password</label>
                        <input type="text" name='password' value={data.password} onChange={handlechange}/>
                        <label htmlFor="">Confirm Password</label>
                        <input type="text" name='confirm_password' value={data.confirm_password} onChange={handlechange}/>
                        <button className='create' onClick={handlesubmit}>Create Account</button>
                        <h3 className='txt'>Are you a user?</h3>
                        <button className='signinbtn' onClick={handlenavigate}>Sign In</button> 
                    </div>
                </div>
            </div>
            <div className='Rc2'>
                <img src={reg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Register
