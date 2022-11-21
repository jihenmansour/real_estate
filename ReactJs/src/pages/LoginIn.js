import {React, useState, useEffect} from 'react';
import axios from 'axios';

import Image from '../assets/img/house-banner.png';
// import link
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';



const LoginIn = () => {
const [item, setItem] = useState();   
const [inputs, setInputs] = useState([]);
const navigate = useNavigate();


const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
axios.defaults.withCredentials = true;

function handleSubmit (event) {
    event.preventDefault();
    axios("http://localhost:8080/api-state/login.php", {
        method: "post",
        data: inputs
      }).then(function(response){
        if(response.data>0){
            navigate(`/Home/${response.data}`);
            window.location.reload();
            }
         setItem(response.data);
    });
}

  return (
    <div className=" flex items-center  flex-col lg:flex-row overflow-hidden">
    <div className="w-full p-6 bg-white lg:max-w-xl">
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email" name="email" onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password" 
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password" name="password" onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <p class="text-red-500 text-xs italic">{item}</p>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
                to="/Signin"
                className="font-medium text-purple-600 hover:underline"
            >
                Sign up
            </Link>
        </p>
    </div>
    <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
</div>
  );
};

export default LoginIn;
