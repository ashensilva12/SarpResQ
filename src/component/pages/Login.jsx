import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <h2>Login</h2>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password" /></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default Login