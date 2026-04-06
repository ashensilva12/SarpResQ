import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsSubmitting(true)

        try {
            const response = await fetch(`${API_BASE}/api/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: form.email.trim(),
                    password: form.password
                })
            })

            const data = await response.json().catch(() => ({}))

            if (!response.ok) {
                setError(data.message || 'Login failed. Please check your credentials.')
                return
            }

            localStorage.setItem('sarpresqToken', data.token)
            localStorage.setItem('sarpresqUser', JSON.stringify(data.user))
            navigate('/Home')
        } catch {
            setError('Unable to reach server. Please make sure backend is running.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="login_page">
            <div className="login_wrap">
                <div className="login_card">
                <div className="login_intro">
                    <span className="intro_tag">SarpResQ access portal</span>
                    <h1>Welcome back</h1>
                    <p>Sign in to coordinate reports, track rescue responses, and view live hospital readiness.</p>
                    <ul className="login_points">
                        <li>Live district alerts</li>
                        <li>Verified responder dispatch</li>
                        <li>Hospital antivenom updates</li>
                    </ul>
                </div>

                <form className="login_form" onSubmit={onSubmit}>
                    <h2>Login</h2>
                    <p>Use your SarpResQ account credentials to continue.</p>

                    <label htmlFor="loginEmail">Email</label>
                    <input
                        id="loginEmail"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="you@example.com"
                        required
                    />

                    <label htmlFor="loginPassword">Password</label>
                    <input
                        id="loginPassword"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        placeholder="Enter your password"
                        required
                    />

                    {error ? <p className="login_note" role="alert">{error}</p> : null}

                    <div className="login_row">
                        <span>Secure access enabled</span>
                        <Link to="/Register">Create account</Link>
                    </div>

                    <div className="login_cta">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                        <Link to="/dashboard-login" className="btn btn-soft">Explore dashboard</Link>
                    </div>

                    <p className="login_note">Don't have an account? <Link to="/Register">Register</Link></p>
                </form>
                </div>
            </div>
        </div>
  )
}

export default Login