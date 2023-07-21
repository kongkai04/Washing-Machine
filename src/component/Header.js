import React from 'react'

function Header() {
  return (
    <nav>
        <div className="container">
          <div className="nav-con">
            <div className="logo">
              <a href="#">Washing Machine</a>
            </div>
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Member</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header;