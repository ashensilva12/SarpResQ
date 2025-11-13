import React, { useState } from 'react'
import './Navbar.css'

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
          <li className="active"><a href="#" onClick={close}>Home</a></li>
          <li className="active"><a href="#" onClick={close}>Report-us</a></li>
          <li className="active"><a href="#" onClick={close}>Categories</a></li>
          <li className="active"><a href="#" onClick={close}>Hospital</a></li>
          <li className="active"><a href="#" onClick={close}>Contact</a></li>
          <li className="active"><a href="#" onClick={close}>About</a></li>
        </ul>
      </div>

      <div className="footer-container">
        <footer className="footer">© 2025 Sarpresq | Protecting lives & nature</footer>
      </div>
    </div>
  )
}

export default Navbar