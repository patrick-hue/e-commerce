import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../pages/home'
import Notfound from '../pages/notfound'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<Notfound />} />
    </Routes>
  )
}
