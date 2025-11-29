import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)

  return (
    <div>
      <div className="navbar">
        <ul className="navlogo">
          <li className="logo">
            <Link to="/" className="brand-link" onClick={close}>
              <span className="logo-word">Sarp<span className="logo-accent">ResQ</span></span>
              <span className="logo-sub">Protecting lives & nature</span>
            </Link>
          </li>
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
          <li><NavLink to="/Home" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Home</NavLink></li>
          <li><NavLink to="/Report" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Report</NavLink></li>
          <li><NavLink to="/Categories" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Categories</NavLink></li>
          <li><NavLink to="/Hospital" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Hospital</NavLink></li>
          <li><NavLink to="/Contact" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Contact</NavLink></li>
          <li><NavLink to="/About" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>About</NavLink></li>
        </ul>
      </div>

      <div className="footer-container">
        <footer className="footer">© 2025 Sarpresq | Protecting lives & nature</footer>
      </div>
    </div>
  )
}

export default Navbar