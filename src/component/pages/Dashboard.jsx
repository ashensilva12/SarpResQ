import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from '../navigation/Navbar'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard_page">

      <main className="dashboard_main">
        <section className="dash_head">
          <div>
            <span className="dash_badge">Operational console</span>
            <h1>Rescue and hospital dashboard</h1>
            <p>Track live incidents, dispatch readiness, and treatment routing in one clear command view.</p>
          </div>
          <div className="dash_actions">
            <Link to="/Report" className="btn btn-primary">Create incident</Link>
            <Link to="/Hospital" className="btn btn-soft">Hospital map</Link>
          </div>
        </section>

        <section className="stats_grid">
          <article className="stat_card">
            <span>Open incidents</span>
            <strong>128</strong>
            <em>+14 in last 3 hours</em>
          </article>
          <article className="stat_card">
            <span>Teams online</span>
            <strong>62</strong>
            <em>Across 18 districts</em>
          </article>
          <article className="stat_card">
            <span>Avg dispatch time</span>
            <strong>3m 42s</strong>
            <em>12% faster today</em>
          </article>
          <article className="stat_card alert">
            <span>Critical bite alerts</span>
            <strong>07</strong>
            <em>Need immediate routing</em>
          </article>
        </section>

        <section className="board_layout">
          <article className="panel incident_panel">
            <div className="panel_top">
              <h2>Live incident queue</h2>
              <span className="chip live">Live</span>
            </div>
            <div className="queue_table">
              <div className="queue_row head">
                <span>Case ID</span>
                <span>Area</span>
                <span>Priority</span>
                <span>Status</span>
              </div>
              <div className="queue_row">
                <span>#SRQ-2041</span>
                <span>Colombo 06</span>
                <span className="prio high">High</span>
                <span className="state active">Responder en route</span>
              </div>
              <div className="queue_row">
                <span>#SRQ-2038</span>
                <span>Gampaha</span>
                <span className="prio med">Medium</span>
                <span className="state pending">Triage in progress</span>
              </div>
              <div className="queue_row">
                <span>#SRQ-2034</span>
                <span>Matara</span>
                <span className="prio low">Low</span>
                <span className="state done">Resolved</span>
              </div>
              <div className="queue_row">
                <span>#SRQ-2031</span>
                <span>Kandy</span>
                <span className="prio med">Medium</span>
                <span className="state active">Hospital notified</span>
              </div>
            </div>
          </article>

          <aside className="panel action_panel">
            <div className="panel_top">
              <h2>Quick operations</h2>
            </div>
            <div className="quick_stack">
              <Link to="/Report" className="quick_card">
                <h3>Start emergency report</h3>
                <p>Collect location and dispatch nearest rescue unit.</p>
              </Link>
              <Link to="/Categories" className="quick_card">
                <h3>Species verification</h3>
                <p>Check visual clues and safety guidance quickly.</p>
              </Link>
              <Link to="/Contact" className="quick_card">
                <h3>Escalate district control</h3>
                <p>Notify coordinators for large public-risk events.</p>
              </Link>
            </div>
          </aside>
        </section>

        <section className="board_layout secondary">
          <article className="panel metrics_panel">
            <div className="panel_top">
              <h2>Performance overview</h2>
              <span className="chip">Updated 2 min ago</span>
            </div>
            <div className="metric_item">
              <div className="metric_row">
                <span>Responder acceptance rate</span>
                <strong>88%</strong>
              </div>
              <div className="bar"><span style={{ width: '88%' }}></span></div>
            </div>
            <div className="metric_item">
              <div className="metric_row">
                <span>Hospital routing success</span>
                <strong>93%</strong>
              </div>
              <div className="bar"><span style={{ width: '93%' }}></span></div>
            </div>
            <div className="metric_item">
              <div className="metric_row">
                <span>Case closure quality</span>
                <strong>81%</strong>
              </div>
              <div className="bar"><span style={{ width: '81%' }}></span></div>
            </div>
          </article>

          <aside className="panel readiness_panel">
            <div className="panel_top">
              <h2>Readiness checklist</h2>
            </div>
            <ul>
              <li><span className="dot ok"></span>Responder hotline active</li>
              <li><span className="dot ok"></span>Hospital sync completed</li>
              <li><span className="dot warn"></span>North queue above threshold</li>
              <li><span className="dot ok"></span>Species guide refreshed</li>
            </ul>
            <Link to="/About" className="btn btn-soft full">Open operations playbook</Link>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
