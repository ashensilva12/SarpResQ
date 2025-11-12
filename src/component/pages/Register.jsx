import React from 'react'

function Register() {
  return (
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
            </table>
        </form>
    </div>
  )
}

export default Register