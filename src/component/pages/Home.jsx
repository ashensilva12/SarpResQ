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
                    
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home