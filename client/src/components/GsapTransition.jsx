import React,{useEffect, useRef} from 'react'
import Home from '../pages/Home'
import About from './About'
import Signup from '../pages/Signup'
import Seller from '../pages/Seller'
import Buyer from '../pages/Buyer'
import Login from '../pages/Login'
import Contact from './Contact'
import {Routes, Route, useLocation} from 'react-router-dom';
import gsap from 'gsap';

const GsapTransition = () => {
  const nodeRef=useRef(null);
  const location=useLocation();

  useEffect(()=>{
      if(nodeRef.current){
            gsap.fromTo(nodeRef.current, {opacity:0}, {opacity:1, duration:1});
      }
  },[location]);

  
  return (
    <div ref={nodeRef}>
      <Routes location={location}>
        <Route path='/' element={<Home/>} />
        <Route paht='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/seller/profile' element={<Seller/>} />
        <Route path='/buyer/profile' element={<Buyer/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default GsapTransition
