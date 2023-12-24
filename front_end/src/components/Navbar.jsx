// NavBar.js
import React from 'react';
import logo from "./assets/ai-interview-white-logo.png"
import About from './About';
import {Link} from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
const NavBar = () => (
    <nav>
      <a className="logo"> <img className='img' src={logo}  alt='logo' />   </a>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contact</Link>
      </div>
      <Link className="try-interview-btn" to="/interview" >Try Interview</Link>
    </nav>
  );


export default NavBar;
