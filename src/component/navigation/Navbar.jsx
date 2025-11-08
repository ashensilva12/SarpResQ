import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <ul className="navlinks">
            <li className="active"><a href="#">Home</a></li>
            <li className="active"><a href="#">Report-us</a></li>
            <li className="active"><a href="#">Categories</a></li>
            <li className="active"><a href="#">Hospital</a></li>
            <li className="active"><a href="#">Contact</a></li>
            <li className="active"><a href="#">About</a></li>
        </ul>
    </div>
  )
}

export default Navbar