import React from 'react';
import { Routes, Route} from "react-router-dom"
import { useState } from 'react'
import { LandingPage } from './Pages'
import './App.css'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="about" />
          <Route path="play" />
          </Route>
      </Routes>
    </>
  )
}

export default App
