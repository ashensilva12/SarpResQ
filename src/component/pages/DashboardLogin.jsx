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

  const onSubmit = (e) => {
    e.preventDefault()

    const email = form.email.trim() || 'dashboard@sarpresq.lk'
    localStorage.setItem('sarpresqDashboardAuth', 'true')
    localStorage.setItem(
      'sarpresqUser',
      JSON.stringify({
        name: 'Dashboard Operator',
        email,
        role: 'Operations Controller',
        phone: '+94 11 900 1111',
        district: 'National Command Center'
      })
    )

    navigate('/Dashboard')
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
            <p>Use dashboard credentials to continue.</p>

            <label htmlFor="dashEmail">Email</label>
            <input
              id="dashEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="dashboard@sarpresq.lk"
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
