import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ResetPassword = (props) => {
  let {id}=useParams();
  console.log(id)
  const[email,setemail]=useState("");
  const [password,setPassword]=useState("");
  const [password2,setPassword2]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/api/user/password',{
      id,
      password,
      password2
      
    }).then(res=>{
      console.log(res);
      navigate("/Signin")
    }).catch(err=>{
      
      alert("password not matched");
    
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
        New Password
        </label>
        <input
          className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
          placeholder="enter new password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
       
        ></input>
         <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
         Confirm password
        </label>
        <input
          className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
          placeholder="enter new password"
          type="password"
          onChange={(e)=>setPassword2(e.target.value)}
       
        ></input>

        <button
          type="submit"
          className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
        >
        Submit
        </button>
     
       
        
       
      </form>
    </div>
   
    </section>




</div>
  )
}

export default ResetPassword