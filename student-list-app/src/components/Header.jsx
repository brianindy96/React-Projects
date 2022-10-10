import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Wrapper">
            <Link>Home</Link>
            <button>
                
            </button>
        </div>
      </div>
    )
  }
}

export default Header