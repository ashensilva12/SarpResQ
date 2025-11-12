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
                </div>
            </section>
        </div>
    
    </div>
  )
}

export default Home