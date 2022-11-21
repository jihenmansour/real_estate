import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginIn from './pages/LoginIn';
import SignIn from './pages/SignIn';
import UserProfile from './components/UserProfile';
import Account from './components/Account'; 
import AddHouse from './components/AddHouse';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import { HouseContextProvider } from './context.js/HouseContext';
import DetailContextProvider from './context.js/DetailContext';
import  UserContextProvider  from './context.js/UserContext';

const App = () => {
  return (
    <HouseContextProvider>
      <DetailContextProvider>
      <UserContextProvider >
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home/:id' element={<Home />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Loginin' element={<LoginIn />} />
        <Route path='/Userprofile/:id' element={<UserProfile/>} />
        <Route path='/Account/:id' element={<Account/>} />
        <Route path='/AddHouse/:id' element={<AddHouse />} />
        <Route path='/property/:iduser/:idproperty' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
    </UserContextProvider>
    </DetailContextProvider>
    </HouseContextProvider>
  );
};

export default App;
