import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from '../components/redux/user/userSlice';


const SignIn = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  

  
  const handleSubmit=async(e)=>{
    e.preventDefault();              //post---->data daalta h or change bhi kar skta h...
    axios.post('http://localhost:3001/api/user/signin',{
      email,password   //api request ;
      
    }, {
      withCredentials: true
    }).then(res=>{
      console.log(res);
      dispatch(setUserData(res.data));
       navigate("/");
    }).catch(err=>{
      
      alert("wrong password")
      console.log(err.message);
    })

  }


  return (
    <div>
        <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign In
          </h1>
        </div>
        <div className="page-padding py-[10rem] flex justify-center ">
          <form
           onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl rounded-r-3xl"
          >
            
              
           
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="gymate@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign In
            </button>
         
           
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">New to Gymate?</p>
              <Link
                to="/signup"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign Up
              </Link>
              
            </div>
            <div className="mt-4">
            <Link
                to="/forgetpassword"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                forget password?
              </Link>
              </div>
           
          </form>
        </div>
       
        </section>

 




    </div>
  )
}

export default SignIn