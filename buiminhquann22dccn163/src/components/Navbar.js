import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>MyShop</h2>
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/about">Giới Thiệu</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
