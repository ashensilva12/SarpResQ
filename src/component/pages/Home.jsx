import React from 'react'
import Navbar from '../navigation/Navbar'
import './Home.css'

function Home() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='home'>
            <section className="main">
                <div className='main_content'>
                    <h1>Snake Awareness & Rescue Platform</h1>
                    <p>Helping communities stay safe from snake encounters — report, locate, and rescue safely with SarpResQ.</p>
                </div>
                <div className="main_buttons">
                    <button className="btn-report">Report a Snake</button>
                    <button className="btn-hospitals">Find Hospitals</button>
                </div>
            </section>
            <section className="features">
                <div className="feature_card">
                    <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Report" />
                    <h3>Report Snake</h3>
                    <p>Quickly notify rescuers when a snake is spotted in your area.</p>
                </div>
                <div className="feature_card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png" alt="Hospital" />
                    <h3>Hospital Availability</h3>
                    <p>Find hospitals that have antivenom and emergency treatment ready.</p>
                </div>
                <div className="feature_card">
                    <img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" alt="Identify" />
                    <h3>Snake Identification</h3>
                    <p>Learn to identify venomous and non-venomous snakes safely.</p>
                </div>
            </section>
            <section className='aboutus'>
                <h2>About SarpResQ</h2>
                <p>
                    SarpResQ connects people, hospitals, and wildlife rescuers to create a safer
                    environment. Our mission is to reduce panic, improve awareness, and ensure
                    quick medical response during snake encounters.
                </p>
            </section>
        </div>
    </div>
  )
}

export default Home