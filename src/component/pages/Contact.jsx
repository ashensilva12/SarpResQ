import React, { useState } from 'react'
import Navbar from '../navigation/Navbar'
import './Contact.css'

function IconPhone(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.38 2.07.76 3.03a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45c.96.38 1.98.64 3.03.76A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconMail(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 8.5v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 8.5l-10 6-10-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Contact(){
  const [sent, setSent] = useState(false)
  return (
    <div className="contact_page">
      <Navbar />
      <main className="contact_main">
        <section className="contact_hero">
          <div className="hero_copy">
            <span className="hero_badge">Average reply under 6 hours</span>
            <h1>Let’s connect with the SarpResQ team</h1>
            <p className="lead">Whether it’s a partnership, media query or help request, our coordinators connect you with the right expert.</p>
            <div className="hero_cta">
              <a className="btn btn-primary" href="mailto:info@sarpresq.org">Email the team</a>
              <a className="btn btn-ghost" href="tel:+94123456789">Call hotline</a>
            </div>
            <div className="hero_stats">
              <div className="stat">
                <div className="stat_number">24/7</div>
                <div className="stat_label">Emergency support</div>
              </div>
              <div className="stat">
                <div className="stat_number">340+</div>
                <div className="stat_label">Rescue partners</div>
              </div>
              <div className="stat">
                <div className="stat_number">12k+</div>
                <div className="stat_label">Reports resolved</div>
              </div>
            </div>
            <div className="contact_cards">
              <div className="card">
                <div className="card-ix"><IconMail /></div>
                <div>
                  <div className="card-title">Email</div>
                  <a href="mailto:info@sarpresq.org">info@sarpresq.org</a>
                </div>
              </div>
              <div className="card">
                <div className="card-ix"><IconPhone /></div>
                <div>
                  <div className="card-title">Hotline</div>
                  <a href="tel:+94123456789">+94 12 345 6789</a>
                </div>
              </div>
              <div className="card">
                <div className="card-ix">📍</div>
                <div>
                  <div className="card-title">Office</div>
                  <div>Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_side">
            <div className="hero_map">
              <div className="hero_gradient" aria-hidden></div>
              <iframe title="office-map" src="https://www.openstreetmap.org/export/embed.html?bbox=79.8612%2C6.9271%2C79.8712%2C6.9371&layer=mapnik" loading="lazy"/>
            </div>
            <div className="hero_schedule">
              <h3>Support hours</h3>
              <ul>
                <li><span>Rescue desk:</span> 24/7</li>
                <li><span>General inquiries:</span> Mon–Fri · 8:00–18:00</li>
                <li><span>Media line:</span> Daily · 9:00–16:00</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact_response">
          <h2>How your message flows</h2>
          <ul className="response_steps">
            <li>
              <span className="step_number">1</span>
              <div>
                <h4>Submit details</h4>
                <p>Share your contact info and the nature of the request so we direct it correctly.</p>
              </div>
            </li>
            <li>
              <span className="step_number">2</span>
              <div>
                <h4>Coordinator review</h4>
                <p>Our duty coordinator triages urgent cases first and loops in regional partners when needed.</p>
              </div>
            </li>
            <li>
              <span className="step_number">3</span>
              <div>
                <h4>Follow-up</h4>
                <p>Expect a response by email or phone. Emergencies trigger immediate calls.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="contact_form_area">
          <div className="contact_card form_card">
            <h2>Send us a message</h2>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Name</label>
              <input type="text" placeholder="Your name" required />

              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />

              <label>Message</label>
              <textarea rows="6" placeholder="How can we help?" required />

              <div className="form-row">
                <button className="btn btn-primary" type="submit">Send message</button>
                <a className="btn btn-ghost" href="/Report">Report urgent incident</a>
              </div>
              {sent && <div className="success">Thanks — your message was sent (demo).</div>}
            </form>
          </div>
          <aside className="contact_aside">
            <div className="aside_card">
              <h3>Emergency contact</h3>
              <p>Call <a href="tel:+94771234567">+94 77 123 4567</a> for life-threatening situations. We coordinate with local wildlife departments and hospitals.</p>
            </div>
            <div className="aside_card">
              <h3>Stay connected</h3>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook community</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram updates</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter) alerts</a></li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default Contact
