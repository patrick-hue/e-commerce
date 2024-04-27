import React from 'react';
import { Link } from 'react-router-dom';
import "./sytle.css";
export default function Headeradmin() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/admin">Admin Home</Link></li>
          <li><Link to="/admin/addproduct">Add Product</Link></li>
          <li><Link to="/admin/orders">View Orders</Link></li>
          {/* Add more navigation links for other admin pages here */}
        </ul>
      </nav>
    </div>
  );
}
