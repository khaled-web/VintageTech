import React from "react";
import {Link} from 'react-router-dom'
import '../assets/Css/header.css'
import logo from '../assets/logo.svg'
export default function Header() {
  return(
    <header className="header">
      <img src={logo} alt="log" className="logo"/>
      <nav>
        <ul>
          {/* pages */}
          <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
          </div>
          {/* login/cart */}
          <div>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </div>
        </ul>
      </nav>
    </header>
    )
}
