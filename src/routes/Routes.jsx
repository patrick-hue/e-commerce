// Routing.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/home';
import Notfound from '../pages/notfound';


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
