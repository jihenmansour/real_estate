import {React, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';

// import logo
import Logo from '../assets/img/logo.svg';
import { UserContext } from '../context.js/UserContext';

const Header = () => {

const id = localStorage.getItem("idUser");
const {item, setPath } = useContext(UserContext);

useEffect(() => {
  setPath(id);
}, [id]);

  return (
    
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
          <img src={Logo} alt='' />
        <div className='flex items-center gap-6'>
        { id>0 ?
          <Link
          className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
          to={`/Userprofile/`+id}
        >
          profile
        </Link>
          :
          <Link
          className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
          to='/Loginin'
        >
          Login
        </Link>
      }
        </div>
      </div>
    </header>
  );
};

export default Header;
