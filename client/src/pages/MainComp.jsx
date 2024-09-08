import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer';

function MainContent() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" || "/signup" ? null : <Footer />}
    </>
  );
}

export default MainContent;
