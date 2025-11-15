import React, { useState } from 'react'
import './Register.css'
import loginImage from '../../assets/login.jpg';
import { Link } from 'react-router-dom';

function Register() {
    const [location, setLocation] = useState('')

    const handleSetLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
            return
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude.toFixed(6)
                const lng = pos.coords.longitude.toFixed(6)
                setLocation(`${lat}, ${lng}`)
            },
            (err) => {
                alert('Unable to retrieve your location')
            },
            { enableHighAccuracy: true, timeout: 10000 }
        )
    }
    return (
        <div className="auth-page">
            <div className="loginbox">
                <div className="loginheader">
                        <h2 className='title'>Register</h2>
                </div>
        <form>
            <table className='table'>
                <tr>
                    <td>Username:</td>
                    <td><input type="email" name="username"placeholder="&#9993; Email" required/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password" placeholder="&#128274; Password" required/></td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td><input type="password" name="confirmPassword" placeholder="&#128274; Confirm Password" required/></td>
                </tr>
                <tr>
                    <td>Location :</td>
                    <td>
                        <div className="location-row">
                            <input
                                className="location-input"
                                type="text"
                                name="location"
                                placeholder="&#127968; Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                            <button type="button" className="set-location-btn" onClick={handleSetLocation}>Set Location</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" ><button type="submit">Register</button></td>
                </tr>
                <tr>
                    <td colSpan="2" style={{textAlign: 'center', paddingTop: '12px'}}>Already have an account? <Link to="/">Login</Link></td>
                </tr>
            </table>
                </form>
            </div>
        </div>
  )
}

export default Register