import React from 'react'
import './Login.css'
import loginImage from '../../assets/login.jpg';
import { Link } from 'react-router-dom';

function Login() {
    return (
   
        <div className="auth-page">
            <div className="loginbox">
                <div className="loginheader">
                        <h2 className='title'>Login</h2>
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
                    <td colSpan="2" ><button type="submit">LOGIN</button></td>
                </tr>
                <tr>
                    <td colSpan="2" >Don't have an account? <Link to="/Register">Register</Link></td>
                </tr>
            </table>
                </form>
            </div>
        </div>
  )
}

export default Login