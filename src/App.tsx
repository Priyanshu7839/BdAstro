import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import SplashScreen from './pages/SplashScreen.jsx'
import InfoScreen from './pages/InfoScreen.jsx'
import SignInPage from './pages/SignInPage.jsx'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {


 

  return (
   

    <BrowserRouter>
      <Routes>
        {/* Auth flow — no shared layout/navbar */}
        <Route path="/" element={< SplashScreen/>} />
        <Route path="/Info" element={< InfoScreen/>} />

        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/Home" element={<Home />} />

        
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
