import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const Weight = () => {
    const[weight,setWeight]=useState("");
    const[data,setdata]=useState([])

    const user =useSelector((state)=>state.user.UserData);
    console.log(user._id);

    useEffect(() => {
    axios.get(`http://localhost:3001/api/user/getweights/${user._id}`).
    then((res)=>setdata(res.data)).catch((err)=>console.log(err))
    
      
    }, [user._id])
    
  
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      
      axios.post(`http://localhost:3001/api/user/weights/${user._id}`,{
        weight
      })
      .then((res)=>{setdata(res.data)})
      .catch(err=>console.log(err))

    }
    const chartOptions = {
        chart: {
          type: 'line',
          background: '#333',
          toolbar: {
            show: false,
          },
        },
        theme: {
          mode: 'dark',
        },
        colors: ['#ff0000'],
        stroke: {
          width: 3,
          curve: 'smooth',
        },
        markers: {
          size: 6,
        },
        xaxis: {
          categories: ['Last Month', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'This Month'],
        },
        yaxis: {
          labels: {
            style: {
              colors: '#ffffff',
            },
          },
        },
      };
    
      const chartSeries = [
        {
          name: 'Weight',
          data: data
        },
      ];
      
    

  return (
    <div>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Check Your Progress
          </h1>
        </div>
        <div className="page-padding py-[10rem] flex justify-center ">
          <form onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl rounded-r-3xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium">
              Today's Weight
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="Enter weight"
              type="number"
              onChange={(e)=>setWeight(e.target.value)}
            />
            <button 
             type='submit'
              className="bg-[#ff0336] text-white py-3 rounded-lg font-medium text-lg cursor-pointer"
              onClick={() => alert('Weight Submitted')}
            >
              Submit
            </button>
          </form>
          </div>
          <div>

         
          <div className="content-center pl-20 	 ">
            <Chart
         options={chartOptions}
         series={chartSeries}
         type="line"
         width={600}
         height={400}
              
            />
          </div>
        </div>
      </section>

    
      
    </div>
  );
};

export default Weight;
