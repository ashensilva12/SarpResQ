import React from 'react'
import Navbar from '../navigation/Navbar'
import './About.css'

function About() {
  return (
    <div className="about_page">
      <Navbar />
      <main className="about_main">
        <section className="about_hero">
          <div className="hero_bg" aria-hidden></div>
          <div className="hero_grid">
            <div className="hero_copy">
              <span className="hero_badge">Since 2020 | Sri Lanka</span>
              <h1>Saving lives while protecting Sri Lanka's snakes</h1>
              <p className="lead">SarpResQ is a community-driven network that links citizens, rescuers and medical teams so every snake encounter ends safely for people and wildlife.</p>
              <div className="hero_actions">
                <a href="/Report" className="btn btn-primary">Report a sighting</a>
                <a href="/Contact" className="btn btn-ghost">Partner with us</a>
              </div>
              <div className="hero_metrics">
                <div className="metric">
                  <div className="metric_num">12k+</div>
                  <div className="metric_label">Verified reports</div>
                </div>
                <div className="metric">
                  <div className="metric_num">150+</div>
                  <div className="metric_label">Hospitals connected</div>
                </div>
                <div className="metric">
                  <div className="metric_num">340+</div>
                  <div className="metric_label">Rescue partners</div>
                </div>
              </div>
            </div>
            <div className="hero_visual">
              <div className="visual_card mission">
                <h3>Our mission</h3>
                <p>Deliver fast, reliable snake identification, coordinate humane rescues and ensure antivenom-ready hospitals are within reach.</p>
              </div>
              <div className="visual_card vision">
                <h3>Vision</h3>
                <p>A Sri Lanka where humans and snakes coexist safely thanks to shared knowledge, swift action and respect for biodiversity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about_values">
          <h2>Guiding values</h2>
          <div className="values_grid">
            <article className="value_card">
              <h4>Safety first</h4>
              <p>Every feature prioritises human life without losing sight of animal welfare. We promote evidence-based first aid and clear do's and don'ts.</p>
            </article>
            <article className="value_card">
              <h4>Community powered</h4>
              <p>Thousands of volunteers, rescuers and medical staff share sightings, photos and hospital availability in real time.</p>
            </article>
            <article className="value_card">
              <h4>Transparency</h4>
              <p>We publish response times, outcomes and partner data so communities can trust every alert.</p>
            </article>
          </div>
        </section>

        <section className="about_story">
          <div className="story_grid">
            <div className="story_copy">
              <h2>Our journey</h2>
              <p>Started by field rescuers frustrated with disjointed communication, SarpResQ now connects every province with shared data and coordinated responses.</p>
              <ol className="timeline">
                <li><strong>2020</strong> Prototype launched with SMS alerts in Colombo district.</li>
                <li><strong>2021</strong> Introduced species gallery and community training workshops.</li>
                <li><strong>2023</strong> Hospital inventory checks and live antivenom updates.</li>
                <li><strong>2025</strong> Nationwide responder map with <em>over 340 rescue teams</em>.</li>
              </ol>
            </div>
            <div className="story_highlight">
              <h3>Where we help</h3>
              <ul>
                <li><span>Urban homes:</span> Rapid identification and safe removal.</li>
                <li><span>Rural farming zones:</span> Preventive education and bite response.</li>
                <li><span>Schools &amp; temples:</span> Awareness drives and demo sessions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about_partners">
          <h2>Trusted partners</h2>
          <div className="partner_strip">
            <span>Wildlife Trust</span>
            <span>MedicAid Sri Lanka</span>
            <span>RescueNet</span>
            <span>Colombo General Hospital</span>
            <span>Green Earth Collective</span>
          </div>
        </section>

        <section className="about_team">
          <h2>Meet the team</h2>
          <div className="team_grid">
            <div className="team_card">
              <div className="avatar">AP</div>
              <div>
                <div className="team_name">Asha Perera</div>
                <div className="team_role">Founder &amp; Operations lead</div>
                <p>Coordinates regional rescues and manages responder training.</p>
              </div>
            </div>
            <div className="team_card">
              <div className="avatar">MS</div>
              <div>
                <div className="team_name">Dr. Malith Silva</div>
                <div className="team_role">Medical advisor</div>
                <p>Ensures our first-aid guidance and hospital data remain accurate.</p>
              </div>
            </div>
            <div className="team_card">
              <div className="avatar">NF</div>
              <div>
                <div className="team_name">Nimali Fernando</div>
                <div className="team_role">Herpetologist</div>
                <p>Leads species identification, photo audits and conservation outreach.</p>
              </div>
            </div>
            <div className="team_card">
              <div className="avatar">KJ</div>
              <div>
                <div className="team_name">Kamal Jay</div>
                <div className="team_role">Lead developer</div>
                <p>Builds mapping tools and realtime data pipelines powering the platform.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about_cta">
          <div className="cta_card">
            <h2>Volunteer or collaborate</h2>
            <p>Join training sessions, share hospital updates or help us run awareness events in your district.</p>
            <div className="cta_actions">
              <a className="btn btn-primary" href="mailto:partners@sarpresq.org">Become a partner</a>
              <a className="btn btn-ghost" href="/Contact">Talk to us</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
