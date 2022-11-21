import {React, useState, useEffect, useContext} from 'react';
import Heart from "react-heart";
import { useParams } from 'react-router-dom';
import {BsTelephone} from 'react-icons/bs';


// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { DetailContext } from '../context.js/DetailContext';
import { icons } from 'react-icons';
import axios from 'axios';


const PropertyDetails = ({match}) => {
const [active, setActive] = useState(false);
const [showModal, setShowModal] = useState(false);
const {idproperty, iduser} = useParams();
const {item, setPath, path } = useContext(DetailContext);
useEffect(() => {
  setPath(idproperty);
}, [idproperty]);
console.log(iduser);

const handleSubmit = () => {
  
  axios.put(`http://localhost:8080/api-state/likedHouses.php/${iduser}/${idproperty}`).then(function(response){
  });
  
}

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
      <div>
        <h2 className='text-2xl font-semibold'>{item.name}</h2>
        <h3 className='text-lg mb-4'>{item.address}</h3>
      </div>
      <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {item.type_house}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
          {item.country}
        </div>
      </div>
      <div className='text-3xl font-semibold text-violet-600'>
        $ {item.price}
      </div>
    </div>
    <div className='flex flex-col items-start gap-8 lg:flex-row'>
      <div className='max-w-[768px]'>
        <div className='mb-8'>
          <img src={`data:image/png;charset=utf8;base64,${item.image_sm}`} alt='' />
        </div>
        <div className='flex flex-row lg:items-center justify-between mb-6'>
         <div className="grid grid-flow-col auto-cols-max gap-x-6 text-violet-700">
         <div className='flex gap-x-2 items-center'>
            <BiBed className='text-2xl' />
            <div className='text-lg font-medium'>{item.bedrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
            <BiBath className='text-2xl' />
            <div className='text-lg font-medium'>{item.bathrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
            <BiArea className='text-2xl' />
            <div className='text-lg font-medium'>{item.surface}</div>
          </div>
        
      </div>
      <div className='flex pl-3 items-center'>
          <div style={{ width: "1.6rem" }} >
          <Heart isActive={active} inactiveColor = "rgb(109 40 217)" onClick={() => {setActive(!active);handleSubmit();}}/>
          </div>
          </div>
    </div>
        <p>{item.description}</p>
      </div>
      <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
      
        <form className='flex flex-col gap-y-4'>
          <input
            className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
            type='text'
            placeholder='Name*'
          />
          <input
            className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
            type='text'
            placeholder='Email*'
          />
          <input
            className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
            type='text'
            placeholder='Phone*'
          />
          <textarea
            className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
            type='text'
            placeholder='Message*'
            defaultValue='Hello, I am interested in [Modern apartment]'
          />
          <div className='flex gap-x-2'>
            <button
              className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
              type='submit'
            >
              Send message
            </button>
            <button
        className='border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'
        type="button"
        onClick={() => setShowModal(true)}
      >
       Call
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
               <div className="mt-3 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-5">
                    <BsTelephone color="violet" fontSize="1.5em"/>
                </div>
                <h3 className="text-sm text-gray-500">Landlord phone number</h3>
                <div className="mt-2 px-7 py-3">
                    <p className="text-lg leading-6 font-medium text-gray-900">{item.phone_number}</p>
                </div>
                <div className="items-center px-4 py-3">
                    <button id="ok-btn"
                        className="px-4 py-2 bg-purple-500 text-white 
                            text-base font-medium rounded-md w-full 
                            shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={() => setShowModal(false)}>
                        OK
                    </button>
                </div>
            </div>
        </div>
       </div>
       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
            
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default PropertyDetails;


