import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <>
      <div>
        <div className='header'>
          <Header />
        </div>
        <Outlet />
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
