import React from 'react'
import Headeradmin from './headeradmin'
import { Outlet } from 'react-router-dom'

export default function LayoutAdmin() {
  return (
    <div>
      <Headeradmin />
       
      <Outlet />
    </div>
  )
}
