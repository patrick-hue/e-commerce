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
        <div>
          <h1>Hello, Welcome!</h1>
          {/* You can add any message or content here */}
        </div>
        <Outlet /> {/* Rendering child routes */}
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
