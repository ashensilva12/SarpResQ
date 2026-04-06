import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)

  let user = null
  try {
    const rawUser = localStorage.getItem('sarpresqUser')
    user = rawUser ? JSON.parse(rawUser) : null
  } catch {
    user = null
  }

  const profile = {
    name: user?.name || 'SarpResQ User',
    email: user?.email || 'user@sarpresq.lk',
    role: user?.role || 'Community Member',
    phone: user?.phone || '+94 77 000 0000',
    district: user?.district || 'Colombo District'
  }

  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'SU'

  const toggle = () => setOpen(o => !o)
  const close = () => setOpen(false)
  const toggleAccount = () => setAccountOpen((v) => !v)
  const closeAccount = () => setAccountOpen(false)

  const handleLogout = () => {
    localStorage.removeItem('sarpresqToken')
    localStorage.removeItem('sarpresqUser')
    localStorage.removeItem('sarpresqDashboardAuth')
    sessionStorage.removeItem('sarpresqUser')
    setOpen(false)
    setAccountOpen(false)
    navigate('/')
  }

  useEffect(() => {
    setOpen(false)
    setAccountOpen(false)
  }, [location.pathname])

  return (
    <div className="nav_shell">
      <div className="navbar">
        <ul className="navlogo">
          <li className="logo">
            <Link to="/" className="brand-link" onClick={close}>
              <span className="logo-word">Sarp<span className="logo-accent">ResQ</span></span>
              <span className="logo-sub">Protecting lives & nature</span>
            </Link>
          </li>
        </ul>

        <div className="nav_right">
          <ul className={`navlinks ${open ? 'open' : ''}`}>
            <li><NavLink to="/Home" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Home</NavLink></li>
            <li><NavLink to="/Report" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Report</NavLink></li>
            <li><NavLink to="/Categories" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Categories</NavLink></li>
            <li><NavLink to="/Hospital" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Hospital</NavLink></li>
            <li><NavLink to="/Contact" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>Contact</NavLink></li>
            <li><NavLink to="/About" className={({isActive}) => isActive ? 'current' : ''} onClick={close}>About</NavLink></li>
          </ul>

          <button
            className="account_btn"
            type="button"
            onClick={toggleAccount}
            aria-expanded={accountOpen}
            aria-controls="account-sidebar"
          >
            <span className="account_avatar" aria-hidden="true">{initials}</span>
            <span className="account_label">Account</span>
          </button>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            <span className={`hamburger ${open ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`account_overlay ${accountOpen ? 'show' : ''}`}
        onClick={closeAccount}
        aria-hidden={!accountOpen}
      />
      <aside id="account-sidebar" className={`account_sidebar ${accountOpen ? 'open' : ''}`}>
        <div className="account_head">
          <h3>User Account</h3>
          <button type="button" className="account_close" onClick={closeAccount} aria-label="Close account panel">✕</button>
        </div>

        <div className="account_profile">
          <div className="profile_avatar">{initials}</div>
          <div>
            <strong>{profile.name}</strong>
            <p>{profile.role}</p>
          </div>
        </div>

        <div className="account_details">
          <div><span>Email</span><strong>{profile.email}</strong></div>
          <div><span>Phone</span><strong>{profile.phone}</strong></div>
          <div><span>District</span><strong>{profile.district}</strong></div>
          <div><span>Member</span><strong>Since 2026</strong></div>
        </div>

        <button type="button" className="logout_btn" onClick={handleLogout}>Log out</button>
      </aside>

      <div className="footer-container">
        <footer className="footer">
          <span>© 2026 SarpResQ | Protecting lives & nature</span>
          <div className="footer-socials" aria-label="social links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Navbar