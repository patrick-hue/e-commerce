// Routing.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import NotFound from './NotFound'; // Assuming you have a NotFound component

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
