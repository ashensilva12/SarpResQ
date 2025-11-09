import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <h2>Login</h2>
            <table>
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