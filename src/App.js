import React from 'react';

import Header from './Components/Header/Header';

import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';

import Login from './Components/Login/Login';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login/*' element={<Login />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
