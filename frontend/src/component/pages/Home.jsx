import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navigation/Navbar'
import heroIllustration from '../../assets/snake-hero.svg'
import './Home.css'

function Home() {
    return (
        <div className="home_page">
            <Navbar />
            <main className="home_main">
                <section className="home_hero">
                    <div className="hero_background" aria-hidden="true"></div>
                    <div className="hero_content">
                        <div className="hero_copy">
                            <span className="hero_badge">Coordinated rescue network</span>
                            <h1>Real-time snake rescue coordination across Sri Lanka</h1>
                            <p className="lead">SarpResQ turns neighbourhood alerts into guided action with verified responders, hospital readiness data, and identification support on any device.</p>
                            <div className="hero_actions">
                                <Link to="/Report" className="btn btn-primary">Report a sighting</Link>
                                <Link to="/Categories" className="btn btn-ghost">View species guide</Link>
                                <Link to="/Hospital" className="btn btn-minimal">Check hospitals</Link>
                            </div>
                            <div className="hero_metrics">
                                <div className="metric">
                                    <span className="metric_num">12k+</span>
                                    <span className="metric_label">Community reports</span>
                                </div>
                                <div className="metric">
                                    <span className="metric_num">340+</span>
                                    <span className="metric_label">Rescue partners</span>
                                </div>
                                <div className="metric">
                                    <span className="metric_num">150+</span>
                                    <span className="metric_label">Hospitals synced</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero_visual">
                            <div className="visual_media">
                                <img src={heroIllustration} alt="Stylised illustration of a coiled snake" />
                            </div>
                            <div className="visual_annotation">
                                <h3>3 minute average response</h3>
                                <p>Volunteer rescuers receive geotagged alerts with species hints, staying ready with humane handling gear.</p>
                                <div className="annotation_steps">
                                    <span>Snap</span>
                                    <span>Share</span>
                                    <span>Rescue</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home_quick_actions">
                    <div className="section_header">
                        <h2>Choose your next step</h2>
                        <p>Powerful tools built with rescuers, hospitals, and households so every encounter stays calm and informed.</p>
                    </div>
                    <div className="quick_grid">
                        <article className="quick_card">
                            <span className="quick_tag">Emergency</span>
                            <h3>Need a responder now?</h3>
                            <p>Alert the nearest verified rescuer, share photos, and pin your location without leaving the chat.</p>
                            <Link to="/Report" className="btn btn-primary">Start a report</Link>
                        </article>
                        <article className="quick_card">
                            <span className="quick_tag">Identify</span>
                            <h3>Unsure about a species?</h3>
                            <p>Browse the species gallery, compare markings, and log preventive tips tailored to your district.</p>
                            <Link to="/Categories" className="btn btn-ghost">Open gallery</Link>
                        </article>
                        <article className="quick_card">
                            <span className="quick_tag">Hospitals</span>
                            <h3>Find treatment nearby</h3>
                            <p>Check antivenom readiness, call emergency wards, and share arrival updates with family.</p>
                            <Link to="/Hospital" className="btn btn-ghost">View hospitals</Link>
                        </article>
                    </div>
                </section>

                <section className="response_flow">
                    <div className="flow_card">
                        <h2>How SarpResQ guides every case</h2>
                        <p>We standardise the rescue journey so communities feel confident and responders stay coordinated.</p>
                        <ol className="flow_steps">
                            <li>
                                <span className="step_badge">01</span>
                                <div>
                                    <h3>Alert and triage</h3>
                                    <p>Guided questions capture the encounter, location, and risk level with language support.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step_badge">02</span>
                                <div>
                                    <h3>Verified identification</h3>
                                    <p>Photo-assisted identification and knowledge base links ensure safe advice while help is on the way.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step_badge">03</span>
                                <div>
                                    <h3>Coordinate rescue</h3>
                                    <p>Nearest responder receives routing, communication updates, and humane handling checklists.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step_badge">04</span>
                                <div>
                                    <h3>Hospital follow-up</h3>
                                    <p>Antivenom stock levels and referral hospitals sync with the caller for transparent aftercare.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <aside className="flow_aside">
                        <div className="aside_card">
                            <h3>Live responder map</h3>
                            <p>See active volunteers by district, track who accepts the case, and monitor ETA updates.</p>
                        </div>
                        <div className="aside_card">
                            <h3>Multilingual guidance</h3>
                            <p>Printable first aid leaflets in Sinhala, Tamil, and English share the right do's and don'ts instantly.</p>
                        </div>
                    </aside>
                </section>

                <section className="impact_strip">
                    <div className="impact_item">
                        <span className="impact_num">12k+</span>
                        <span className="impact_label">Reports handled</span>
                        <p>Captured across urban, rural, and wildlife zones since 2020.</p>
                    </div>
                    <div className="impact_item">
                        <span className="impact_num">340+</span>
                        <span className="impact_label">Rescue teams</span>
                        <p>Verified responders trained in humane relocation and first response.</p>
                    </div>
                    <div className="impact_item">
                        <span className="impact_num">150+</span>
                        <span className="impact_label">Hospitals connected</span>
                        <p>Antivenom stocks updated twice daily with contact-ready hotlines.</p>
                    </div>
                    <div className="impact_item">
                        <span className="impact_num">95%</span>
                        <span className="impact_label">Average response rate</span>
                        <p>Completion tracked through closure calls and follow-up surveys.</p>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="section_header">
                        <h2>Trusted by households and responders</h2>
                        <p>Insights gathered from monthly follow-ups across Colombo, Galle, Kandy, and Jaffna.</p>
                    </div>
                    <div className="testimonial_grid">
                        <blockquote className="testimonial_card">
                            <p>"We had a cobra in the shed. A volunteer arrived in minutes and the app kept us calm the entire time."</p>
                            <cite>Priya | Colombo 07</cite>
                        </blockquote>
                        <blockquote className="testimonial_card">
                            <p>"The gallery explained the markings, so we knew it was non-venomous and avoided harming it."</p>
                            <cite>Suren | Matara</cite>
                        </blockquote>
                        <blockquote className="testimonial_card">
                            <p>"Real-time hospital updates mean we no longer guess which ER is ready with antivenom."</p>
                            <cite>Dr. Malith | Galle Teaching Hospital</cite>
                        </blockquote>
                    </div>
                </section>

                <section className="home_cta">
                    <div className="cta_card">
                        <h2>Bring SarpResQ training to your community</h2>
                        <p>Schedule awareness sessions, share data dashboards, or volunteer with our district-level rescue squads.</p>
                        <div className="cta_actions">
                            <Link to="/Contact" className="btn btn-primary">Book a workshop</Link>
                            <Link to="/About" className="btn btn-ghost">Learn how we work</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home