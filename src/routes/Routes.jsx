import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/home';
import NotFound from '../pages/notfound';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Define other nested routes within Layout if needed */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
