import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';

function Register() {
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