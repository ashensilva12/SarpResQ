import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="loginbox">
        <form>
            <h2 className='title'>Login</h2>
            <table className='table'>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" required/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password" required/></td>
                </tr>
                <tr>
                    <td colSpan="2"><button type="submit">Login</button></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Login