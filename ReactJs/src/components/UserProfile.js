import {React, useState} from 'react';
import {BsFillHeartFill} from 'react-icons/bs';
import {FiLogOut} from 'react-icons/fi';
import {AiOutlineSetting} from 'react-icons/ai'; 
import LikedHousesList from './LikedHousesList'; 


const UserProfile = () => {
    const [active, setActive] = useState(false);
    const id = localStorage.getItem("idUser");
    const handleSubmit = () => {
      localStorage.removeItem("idUser");
      
    }



  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      
      <a className='flex p-4 place-content-end items-center' href='/' onClick={() => handleSubmit()}>
      <FiLogOut/> Log out
      </a>
      <a className='flex p-4 place-content-end items-center' href={`/Account/`+id}>
      <AiOutlineSetting/> Account details
      </a>
    <div className='flex flex-col items-start gap-8 lg:flex-row'>
      <div className='max-w-[768px]'>          
      </div>
      <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
      <div className='flex gap-x-2'>
            <h1 className=' text-violet-700  p-4  w-full transition'>
              Saved properties
            </h1>
          </div>
          <div className="items-center bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
             <BsFillHeartFill color='rgb(182, 173, 173)' size='50px'/>
             You have no saved properties Click the heart on a property listing to save your favourite properties and find them here later.
             <LikedHousesList/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfile