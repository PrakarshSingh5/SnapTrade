import  React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'

import Footer from './components/Footer'
import GsapTransition from './components/GsapTransition'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <GsapTransition/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
