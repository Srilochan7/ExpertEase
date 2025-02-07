import React, { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import Footer from './components/footer'
import What from './components/what'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Analytics/>
      <Navbar/>
      <Hero/>
      <What/>
      <Footer/>
    </div>
  )
}

export default App

