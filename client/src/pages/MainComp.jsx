import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer';

function MainContent() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" || pathname == "/about"  || pathname =='/contact' ? <Footer /> : null }
    </>
  );
}

export default MainContent;
