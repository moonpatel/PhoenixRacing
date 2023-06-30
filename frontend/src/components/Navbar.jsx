import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Raleway&display=swap');
</style>
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo"><img src='logo.png' />Phoenix Racing</a>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="navbar-item">Home</NavLink>
          <NavLink to="/cars" className="navbar-item">Cars</NavLink>
          <NavLink to="/team" className="navbar-item">Team</NavLink>
          <NavLink to="/sponsors" className="navbar-item">Sponsor</NavLink>
          <NavLink to="/alumni" className="navbar-item">Alumni</NavLink>
          <NavLink to="/blogs" className="navbar-item">Blogs</NavLink>

        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`navbar-icon ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
