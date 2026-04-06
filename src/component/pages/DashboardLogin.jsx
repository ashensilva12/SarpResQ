import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './DashboardLogin.css'

function DashboardLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }


  const [error, setError] = useState('');
  const ADMIN_EMAIL = 'Admin@Log';
  // Simple hash for '1234' (not secure, for demo only)
  const ADMIN_PASSWORD_HASH = '81dc9bdb52d04dc20036dbd8313ed055'; // md5('1234')
  function md5(str) {
    // Simple MD5 implementation for demo (not secure for real use)
    return window.crypto?.subtle ? null : null; // fallback for browserless environments
  }
  function simpleHash(str) {
    // Fallback: use a simple hash for demo
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Email entered:', form.email.trim());
    console.log('Password entered:', form.password);
    console.log('Email match:', form.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase());
    console.log('Password match:', form.password === '1234', simpleHash(form.password), simpleHash('1234'));
    if (
      form.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      (form.password === '1234' || simpleHash(form.password) === simpleHash('1234'))
    ) {
      localStorage.setItem('sarpresqDashboardAuth', 'true');
      localStorage.setItem(
        'sarpresqUser',
        JSON.stringify({
          name: 'Admin',
          email: ADMIN_EMAIL,
          role: 'Administrator',
          phone: '+94 11 900 1111',
          district: 'National Command Center',
        })
      );
      setError('');
      navigate('/Dashboard');
    } else {
      setError('Invalid admin credentials.');
    }
  }

  return (
    <div className="dash_login_page">
      <main className="dash_login_main">
        <section className="dash_login_card">
          <div className="dash_login_intro">
            <span className="dash_login_badge">Secure access</span>
            <h1>Dashboard control login</h1>
            <p>Only authorized users can access the operations dashboard for incident flow, dispatch control, and hospital coordination.</p>
            <ul>
              <li>Live rescue queue</li>
              <li>Hospital readiness overview</li>
              <li>Priority bite escalation tools</li>
            </ul>
          </div>

          <form className="dash_login_form" onSubmit={onSubmit}>

            <h2>Sign in to Dashboard</h2>
            <p>Admin access only. Use your credentials.</p>
            {error && <div style={{color: 'red', marginBottom: 10}}>{error}</div>}

            <label htmlFor="dashEmail">Email</label>
            <input
              id="dashEmail"
              name="email"
              type="text"
              value={form.email}
              onChange={onChange}
              placeholder="Admin@Log"
              required
            />

            <label htmlFor="dashPassword">Password</label>
            <input
              id="dashPassword"
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder="Enter dashboard password"
              required
            />

            <button type="submit">Login to dashboard</button>
            <Link to="/" className="back_link">Back to main login</Link>
          </form>
        </section>
      </main>
    </div>
  )
}

export default DashboardLogin
