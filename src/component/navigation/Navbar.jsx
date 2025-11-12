import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
    <div className="navbar">
        <ul className="navlogo">
            <li className="logo"><span style={{ color: 'tomato' }}>S</span>arp<span style={{ color: 'tomato' }}>R</span>esQ</li>
        </ul>
        <ul className="navlinks">
            <li className="active"><a href="#">Home</a></li>
            <li className="active"><a href="#">Report-us</a></li>
            <li className="active"><a href="#">Categories</a></li>
            <li className="active"><a href="#">Hospital</a></li>
            <li className="active"><a href="#">Contact</a></li>
            <li className="active"><a href="#">About</a></li>
        </ul>
    </div>
    <div className="footer-container">
      <footer className="footer">© 2025 Sarpresq | Protecting lives & nature</footer>
    </div>
    </div>
  )
}

export default Navbar