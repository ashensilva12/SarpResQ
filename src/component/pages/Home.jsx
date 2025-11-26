import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navigation/Navbar'
import snake from '../../assets/snake.png'
import './Home.css'

function Home() {
  return (
    <div>
       <div>
        <Navbar/>
        </div>
                                <div className='home'>
                                                <section className="main hero">
                                                                <div className="hero-inner">
                                                                        <div className='hero-left'>
                                                                                <h1 className="hero-title">SarpResQ — Protecting People & Snakes</h1>
                                                                                <p className="lead hero-sub">Report sightings, get identification help, and learn safe response steps for Sri Lanka's snakes.</p>

                                                                                <div className="main_buttons">
                                                                                                <Link to="/Report" className="btn btn-primary">Report a Snake</Link>
                                                                                                <Link to="/Categories" className="btn btn-ghost">Explore species</Link>
                                                                                </div>

                                                                                <ul className="hero-features">
                                                                                    <li>Verified community reports</li>
                                                                                    <li>Clear identification cards</li>
                                                                                    <li>First-aid guidance & hospitals</li>
                                                                                </ul>
                                                                        </div>

                                                                        <div className='hero-right'>
                                                                                <div className="hero-visual">
                                                                                        <div className="blob blob-1" aria-hidden></div>
                                                                                        <div className="blob blob-2" aria-hidden></div>
                                                                                        <img src={snake} alt="snake illustration" className="hero-img"/>
                                                                                        <div className="hero-badge">SarpResQ</div>
                                                                                </div>
                                                                                <div className="hero-note">Fast reporting • Rescue coordination • Verified hospitals</div>
                                                                        </div>
                                                                </div>
                                                </section>

                        <section className="home-details">
                            <div className="features">
                                <div className="feature_card">
                                        <div className="feature-icon">
                                            <img src={snake} alt="snake" />
                                        </div>
                                        <h3>Fast Reporting</h3>
                                        <p>Quickly notify rescuers when a snake is spotted in your area.</p>
                                </div>
                                <div className="feature_card">
                                        <div className="feature-icon">
                                            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png" alt="Hospital" />
                                        </div>
                                        <h3>Hospital Availability</h3>
                                        <p>Find hospitals that have antivenom and emergency treatment ready.</p>
                                </div>
                                <div className="feature_card">
                                        <div className="feature-icon">
                                            <img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" alt="Identify" />
                                        </div>
                                        <h3>Community Safety</h3>
                                        <p>Learn what to do — and what not to do — around snakes.</p>
                                </div>
                            </div>

                            <div className="testimonials">
                                <h2 className="section-title">What users say</h2>
                                <div className="test-list">
                                    <blockquote className="test-item">"I reported a sighting and got quick local help — very reassuring."<cite>— Priya, Colombo</cite></blockquote>
                                    <blockquote className="test-item">"The species gallery helped me identify a snake near my home."<cite>— Kamal, Galle</cite></blockquote>
                                    <blockquote className="test-item">"Clear advice on first aid is a lifesaver — easy to follow."<cite>— Nirosha, Kandy</cite></blockquote>
                                </div>
                            </div>
                            </section>
                        <section className="stats">
                                                        <div className="stat"> <div className="stat-num">12k+</div> Reports <div className="stat-sub">since 2020</div></div>
                                                        <div className="stat"> <div className="stat-num">340+</div> Rescue Teams <div className="stat-sub">across regions</div></div>
                                                        <div className="stat"> <div className="stat-num">95%</div> Response Rate <div className="stat-sub">average</div></div>
                                                </section>
                </div>
    </div>
  )
}

export default Home