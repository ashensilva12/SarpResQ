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
                            <span className="hero_badge">Sri Lanka snake safety platform</span>
                            <h1>Calm, coordinated rescue support when every minute matters</h1>
                            <p className="lead">SarpResQ helps households report sightings, identify species safely, and connect with nearby responders and antivenom-ready hospitals through one clear workflow.</p>
                            <div className="hero_actions">
                                <Link to="/Report" className="btn btn-primary">Report a sighting</Link>
                                <Link to="/Categories" className="btn btn-ghost">View species guide</Link>
                                <Link to="/Hospital" className="btn btn-minimal">Check hospitals</Link>
                            </div>
                            <div className="hero_metrics">
                                <div className="metric">
                                    <span className="metric_num">12,000+</span>
                                    <span className="metric_label">Community reports</span>
                                </div>
                                <div className="metric">
                                    <span className="metric_num">340+</span>
                                    <span className="metric_label">Rescue teams</span>
                                </div>
                                <div className="metric">
                                    <span className="metric_num">150+</span>
                                    <span className="metric_label">Hospitals linked</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero_visual">
                            <div className="visual_media">
                                <img src={heroIllustration} alt="Stylised illustration of a coiled snake" />
                            </div>
                            <div className="visual_annotation">
                                <h3>Average 3-minute assignment</h3>
                                <p>Verified volunteers receive location-aware alerts with quick context and first-response guidance.</p>
                                <div className="annotation_steps">
                                    <span>Capture</span>
                                    <span>Dispatch</span>
                                    <span>Resolve</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home_quick_actions">
                    <div className="section_header">
                        <h2>Choose your next action</h2>
                        <p>Every tool is designed to reduce panic, improve decisions, and move each case toward a safe outcome.</p>
                    </div>
                    <div className="quick_grid">
                        <article className="quick_card">
                            <span className="quick_icon" aria-hidden="true">⚡</span>
                            <span className="quick_tag">Emergency</span>
                            <h3>Request responder support</h3>
                            <p>Send an instant alert with your location so the nearest trained rescue team can respond quickly.</p>
                            <Link to="/Report" className="btn btn-primary">Start a report</Link>
                        </article>
                        <article className="quick_card">
                            <span className="quick_icon" aria-hidden="true">🧭</span>
                            <span className="quick_tag">Identify</span>
                            <h3>Check species safely</h3>
                            <p>Browse visual references, compare markings, and learn simple do's and don'ts before help arrives.</p>
                            <Link to="/Categories" className="btn btn-ghost">Open gallery</Link>
                        </article>
                        <article className="quick_card">
                            <span className="quick_icon" aria-hidden="true">🏥</span>
                            <span className="quick_tag">Hospitals</span>
                            <h3>Find prepared care</h3>
                            <p>Locate nearby hospitals with antivenom status and contact emergency wards in a single tap.</p>
                            <Link to="/Hospital" className="btn btn-ghost">View hospitals</Link>
                        </article>
                    </div>
                </section>

                <section className="response_flow">
                    <div className="flow_card">
                        <h2>How each case is managed</h2>
                        <p>A clear sequence keeps communication fast and decisions consistent from first alert to hospital follow-up.</p>
                        <ol className="flow_steps">
                            <li>
                                <span className="step_badge">01</span>
                                <div>
                                    <h3>Alert and triage</h3>
                                    <p>Guided prompts gather location, urgency, and encounter details in seconds.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step_badge">02</span>
                                <div>
                                    <h3>Risk-aware identification</h3>
                                    <p>Image hints and field notes improve safety guidance while responders are en route.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step_badge">03</span>
                                <div>
                                    <h3>Rescue coordination</h3>
                                    <p>Nearest teams receive routes, context, and communication updates in real time.</p>
                                </div>
                            </li>
                            <li>
                                <span className="step_badge">04</span>
                                <div>
                                    <h3>Hospital follow-up</h3>
                                    <p>Hospital options and treatment readiness are shared clearly for post-incident care.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <aside className="flow_aside">
                        <div className="aside_card">
                            <h3>Live response map</h3>
                            <p>Track district volunteers, accepted cases, and ETA updates with transparent status cards.</p>
                        </div>
                        <div className="aside_card">
                            <h3>Multilingual guidance</h3>
                            <p>First-aid instructions in Sinhala, Tamil, and English support safer action in high-stress moments.</p>
                        </div>
                    </aside>
                </section>

                <section className="impact_strip">
                    <div className="impact_item">
                        <span className="impact_num">12k+</span>
                        <span className="impact_label">Reports handled</span>
                        <p>Cases documented across urban, rural, and wildlife-adjacent communities.</p>
                    </div>
                    <div className="impact_item">
                        <span className="impact_num">340+</span>
                        <span className="impact_label">Rescue teams</span>
                        <p>Verified responders trained in humane handling and risk reduction.</p>
                    </div>
                    <div className="impact_item">
                        <span className="impact_num">150+</span>
                        <span className="impact_label">Hospitals connected</span>
                        <p>Treatment centers with contact channels and antivenom status updates.</p>
                    </div>
                    <div className="impact_item">
                        <span className="impact_num">95%</span>
                        <span className="impact_label">Average response rate</span>
                        <p>Tracked through closure confirmation and quality follow-up.</p>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="section_header">
                        <h2>Trusted by families and field teams</h2>
                        <p>Feedback from monthly follow-ups across Colombo, Galle, Kandy, and Jaffna.</p>
                    </div>
                    <div className="testimonial_grid">
                        <blockquote className="testimonial_card">
                            <p>"We had a cobra near our store room. A responder arrived within minutes and guided us calmly throughout."</p>
                            <cite>Priya | Colombo 07</cite>
                        </blockquote>
                        <blockquote className="testimonial_card">
                            <p>"The species guide helped us identify markings quickly and avoid harming a non-venomous snake."</p>
                            <cite>Suren | Matara</cite>
                        </blockquote>
                        <blockquote className="testimonial_card">
                            <p>"Live hospital status means we can route patients faster without guessing where antivenom is available."</p>
                            <cite>Dr. Malith | Galle Teaching Hospital</cite>
                        </blockquote>
                    </div>
                </section>

                <section className="home_cta">
                    <div className="cta_card">
                        <h2>Bring safety training to your community</h2>
                        <p>Schedule awareness workshops, collaborate with district teams, or support local preparedness programs.</p>
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