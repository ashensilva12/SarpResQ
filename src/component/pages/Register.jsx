import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="register_page">
            <div className="register_wrap">
                <div className="register_card">
                    <div className="register_side">
                        <span className="register_tag">Community platform</span>
                        <h1>Build safer communities</h1>
                        <p>From first sighting to rescue and medical care, SarpResQ keeps the full response chain connected.</p>
                        <ul className="benefits">
                            <li>Live report routing to nearest responders</li>
                            <li>Hospital readiness and antivenom visibility</li>
                            <li>Trusted district-level case coordination</li>
                        </ul>
                    </div>

                    <form className="register_form">
                        <h2>Create your account</h2>
                        <p>Join SarpResQ and start supporting safe, coordinated snake rescue responses.</p>

                        <div className="grid">
                            <div>
                                <label htmlFor="registerName">Full name</label>
                                <input id="registerName" type="text" name="fullName" placeholder="Your full name" required />
                            </div>
                            <div>
                                <label htmlFor="registerPhone">Phone</label>
                                <input id="registerPhone" type="tel" name="phone" placeholder="+91 00000 00000" required />
                            </div>
                            <div>
                                <label htmlFor="registerEmail">Email</label>
                                <input id="registerEmail" type="email" name="username" placeholder="you@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="registerRole">Role</label>
                                <select id="registerRole" name="role" required>
                                    <option value="">Select role</option>
                                    <option value="citizen">Citizen</option>
                                    <option value="rescuer">Rescuer</option>
                                    <option value="hospital">Hospital staff</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor="registerPassword">Password</label>
                        <input id="registerPassword" type="password" name="password" placeholder="Create a password" required />

                        <label htmlFor="registerConfirmPassword">Confirm password</label>
                        <input id="registerConfirmPassword" type="password" name="confirmPassword" placeholder="Confirm your password" required />

                        <div className="register_actions">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link to="/" className="btn btn-soft">Back to login</Link>
                        </div>

                        <p className="register_note">Already have an account? <Link to="/">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
