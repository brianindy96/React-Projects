import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
          <a href="/">
            <h1>Logo</h1>
          </a>
        </div>
        <div className="links">
            <a href="/cart">
              <p>Cart</p> 
            </a>  
            <a href="/signin">
              <p>Sign In</p>
            </a>
        </div>
    </div>
  )
}

export default Header