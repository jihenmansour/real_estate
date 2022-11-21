import {React, useState, useEffect} from 'react';
import axios from 'axios';

import Image from '../assets/img/house-banner.png';
import { useNavigate } from "react-router-dom";


const SignIn= () => {

    const [username, setUsername] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [island, setIsLand] = useState(false);
    const navigate = useNavigate ();

    const handleChangeIsLand = (event) => {
        setIsLand(event.target.value);
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const post = { 
            name: username,
            phone_number: phoneNumber,
            email: email,
            password: password,
            type: island
          }
        try {
          const response = await axios.post('http://localhost:8080/api-state/register.php', post)
          setError(JSON.parse(JSON.stringify(response.data).replace(/},{/g, ","))[0]);

          if(response.data>0){
            navigate(`/Home/${response.data}`);
            window.location.reload();
          }
         
        } catch (e) {
          alert(e)
        }
      }
     

  return (

    <div className=" flex items-center  flex-col lg:flex-row overflow-hidden">
    <><div className="w-full p-6 bg-white lg:max-w-xl">
        <form className="mt-6" onSubmit={handleRegister}>
            <div className="mb-4">
                <label
                    for="name"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Username
                </label>
                <input
                    type="text" name="name" value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p class="text-red-500 text-xs italic mt-1">{error?.name}</p>
            </div>
            <div className="mb-4">
                <label
                    for="phone"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Phone number
                </label>
                <input
                    type="number" name="phone_number" ovalue={phoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p class="text-red-500 text-xs italic mt-1">{error?.phone}</p>
            </div>
            <div className="mb-4">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p class="text-red-500 text-xs italic mt-1">{error?.email}</p>
            </div>
            <div className="mb-4">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password" name="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p class="text-red-500 text-xs italic mt-1">{error?.password}</p>
            </div>
            <div className="mb-2 ">
                <label className='flex cursor-pointer items-stretch'>
                    <input type="checkbox" name="type" onChange={(event) => {
                        handleChangeIsLand({
                            target: {
                                name: event.target.name,
                                value: event.target.checked,
                            },
                        });
                    } }
                        className="mr-3 cursor-pointer accent-purple-700" /> I am a landlord or industry professional
                </label>
            </div>
            <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Sign up
                </button>
            </div>
        </form>
    </div><div className='hidden flex-1 lg:flex justify-end items-end'>
            <img src={Image} alt='' />
        </div></>
</div>


  );
};

export default SignIn;
