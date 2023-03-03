import React from 'react';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { LandingPage, HerosPage } from './Pages'
import './App.css'
import { Navbar, Landing } from './components'

function App() {

  return (
    <>

      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="about" />
          <Route path="play" element ={<HerosPage/>}/>
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
