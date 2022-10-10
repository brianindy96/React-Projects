import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

export class Header extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Wrapper">
            <Link>Home</Link>
            <button>
                
            </button>
            <div>
                <ul>
                    <li><Link to="/">All Students</Link></li>
                    <li><Link to="/add">Add Students</Link></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Header