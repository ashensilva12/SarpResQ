import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (form.password !== form.confirmPassword) {
            setError('Password and confirm password do not match.')
            return
        }

        setIsSubmitting(true)
        try {
            const response = await fetch(`${API_BASE}/api/user/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.fullName.trim(),
                    email: form.email.trim(),
                    password: form.password,
                    role: form.role
                })
            })

            const data = await response.json().catch(() => ({}))
            if (!response.ok) {
                setError(data.message || 'Registration failed. Please try again.')
                return
            }

            setSuccess('Registration successful. Redirecting to login...')
            setTimeout(() => navigate('/'), 1200)
        } catch {
            setError('Unable to reach server. Please make sure backend is running.')
        } finally {
            setIsSubmitting(false)
        }
    }

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

                    <form className="register_form" onSubmit={onSubmit}>
                        <h2>Create your account</h2>
                        <p>Join SarpResQ and start supporting safe, coordinated snake rescue responses.</p>

                        <div className="grid">
                            <div>
                                <label htmlFor="registerName">Full name</label>
                                <input id="registerName" type="text" name="fullName" value={form.fullName} onChange={onChange} placeholder="Your full name" required />
                            </div>
                            <div>
                                <label htmlFor="registerPhone">Phone</label>
                                <input id="registerPhone" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 00000 00000" required />
                            </div>
                            <div>
                                <label htmlFor="registerEmail">Email</label>
                                <input id="registerEmail" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="registerRole">Role</label>
                                <select id="registerRole" name="role" value={form.role} onChange={onChange} required>
                                    <option value="">Select role</option>
                                    <option value="citizen">Citizen</option>
                                    <option value="rescuer">Rescuer</option>
                                    <option value="hospital">Hospital staff</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor="registerPassword">Password</label>
                        <input id="registerPassword" type="password" name="password" value={form.password} onChange={onChange} placeholder="Create a password" required />

                        <label htmlFor="registerConfirmPassword">Confirm password</label>
                        <input id="registerConfirmPassword" type="password" name="confirmPassword" value={form.confirmPassword} onChange={onChange} placeholder="Confirm your password" required />

                        {error ? <p className="register_note" role="alert">{error}</p> : null}
                        {success ? <p className="register_note">{success}</p> : null}

                        <div className="register_actions">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? 'Registering...' : 'Register'}
                            </button>
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
