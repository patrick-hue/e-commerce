import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/home';
import NotFound from '../pages/notfound';
import About from '../pages/About';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
