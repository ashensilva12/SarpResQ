import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
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

                <form className="login_form">
                    <h2>Login</h2>
                    <p>Use your SarpResQ account credentials to continue.</p>

                    <label htmlFor="loginEmail">Email</label>
                    <input id="loginEmail" type="email" name="username" placeholder="you@example.com" required />

                    <label htmlFor="loginPassword">Password</label>
                    <input id="loginPassword" type="password" name="password" placeholder="Enter your password" required />

                    <div className="login_row">
                        <span>Secure access enabled</span>
                        <Link to="/Register">Create account</Link>
                    </div>

                    <div className="login_cta">
                        <button type="submit" className="btn btn-primary">Login</button>
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