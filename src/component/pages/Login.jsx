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
                    <td><input type="email" name="username" required/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password" required/></td>
                </tr>
                <tr>
                    <td colSpan="2" ><button type="submit">Login</button></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Login