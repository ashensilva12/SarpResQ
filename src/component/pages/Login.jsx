import React from 'react'
import './Login.css'
function Login() {
  return (
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
            </table>
        </form>
    </div>
  )
}

export default Login