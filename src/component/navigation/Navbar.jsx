import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  return (
    <div>
      <div className="navbar">
        <ul className="navlogo">
          <li className="logo"><span style={{ color: 'tomato' }}>S</span>arp<span style={{ color: 'tomato' }}>R</span>esQ</li>
        </ul>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className={`hamburger ${open ? 'open' : ''}`} />
        </button>

        <ul className={`navlinks ${open ? 'open' : ''}`}>
          <li className="active"><Link to="/Home" onClick={close}>Home</Link></li>
          <li className="active"><Link to="/Report" onClick={close}>Report</Link></li>
          <li className="active"><Link to="/Categories" onClick={close}>Categories</Link></li>
          <li className="active"><Link to="/Hospital" onClick={close}>Hospital</Link></li>
          <li className="active"><Link to="/Contact" onClick={close}>Contact</Link></li>
          <li className="active"><Link to="/About" onClick={close}>About</Link></li>
        </ul>
      </div>

      <div className="footer-container">
        <footer className="footer">© 2025 Sarpresq | Protecting lives & nature</footer>
      </div>
    </div>
  )
}

export default Navbar