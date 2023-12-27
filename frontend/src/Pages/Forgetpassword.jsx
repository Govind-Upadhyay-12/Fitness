import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ResetPassword from './ResetPassword';

const Forgetpassword = () => {
  const [email,setemail]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/api/user/reset-password',{
      email,
      
    }).then(res=>{
      console.log(res);
      navigate("/reset-password/:id/:token",{email})
    }).catch(err=>{
      console.log(err)
    })

  }
  return (

  
    <div>
    <section>
    <div className="login-banner relative justify-center flex">
      <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
       Forget password
      </h1>
    </div>
    <div className="page-padding py-[10rem] flex justify-center ">
      <form onSubmit={handleSubmit}
     
        className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl rounded-r-3xl"
      >
        
          
       

        <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
        enter gmail
        </label>
        <input
          className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
       
        ></input>

        <button
          type="submit"
          className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
        >
        Verify
        </button>
     
       
        
       
      </form>
    </div>
   
    </section>




</div>
  )
}

export default Forgetpassword