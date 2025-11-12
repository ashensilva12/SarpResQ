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
            </table>
        </form>
    </div>
  )
}

export default Register