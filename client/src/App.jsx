import  React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'

import Footer from './components/Footer'
import GsapTransition from './components/GsapTransition'
import {Provider} from 'react-redux'
import { store } from '../store/store'
function App() {
 

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <GsapTransition/>
      <Footer/>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
