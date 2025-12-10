import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../navigation/Navbar'
import { Link } from 'react-router-dom'
import './Report.css'

function Report() {
  const snakeOptions = ['Cobra', 'Krait', 'Viper', 'Python', 'Other']
  const [snakeType, setSnakeType] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const selectRef = useRef(null)
  const [locationStr, setLocationStr] = useState('')
  const [coords, setCoords] = useState(null)

  const handleSetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = Number(pos.coords.latitude.toFixed(6))
        const lon = Number(pos.coords.longitude.toFixed(6))
        setCoords({ lat, lon })
        setLocationStr(`${lat}, ${lon}`)
      },
      () => {
        alert('Unable to retrieve your location')
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  const toggleSelect = () => setSelectOpen((o) => !o)
  const closeSelect = () => setSelectOpen(false)
  const onOptionChoose = (idx) => {
    setSnakeType(snakeOptions[idx])
    setHighlightIndex(idx)
    closeSelect()
  }

  const onSelectKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!selectOpen) setSelectOpen(true)
      setHighlightIndex((i) => Math.min(i + 1, snakeOptions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!selectOpen) setSelectOpen(true)
      setHighlightIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (selectOpen) {
        onOptionChoose(highlightIndex)
      } else {
        setSelectOpen(true)
      }
    } else if (e.key === 'Escape') {
      closeSelect()
    }
  }

  useEffect(() => {
    if (!selectOpen) return
    const onDocClick = (ev) => {
      if (selectRef.current && !selectRef.current.contains(ev.target)) closeSelect()
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [selectOpen])

  return (
    <div className="report_page">
      <Navbar />
      <main className="report_main">
        <section className="report_hero">
          <div className="hero_glow" aria-hidden></div>
          <div className="hero_content">
            <div className="hero_copy">
              <span className="hero_badge">Immediate assistance</span>
              <h1>Report a snake encounter in under a minute</h1>
              <p>SarpResQ routes your alert to the nearest verified responder, shares safe instructions, and keeps local hospitals informed.</p>
              <div className="hero_steps">
                <div>
                  <span className="step_number">01</span>
                  <span>Share details</span>
                </div>
                <div>
                  <span className="step_number">02</span>
                  <span>Upload location</span>
                </div>
                <div>
                  <span className="step_number">03</span>
                  <span>Receive guidance</span>
                </div>
              </div>
            </div>
            <div className="hero_stats">
              <div className="stat_card">
                <span className="stat_num">24/7</span>
                <span className="stat_label">Response coverage</span>
              </div>
              <div className="stat_card">
                <span className="stat_num">3 min</span>
                <span className="stat_label">Average responder time</span>
              </div>
              <div className="stat_card">
                <span className="stat_num">150+</span>
                <span className="stat_label">Hospitals kept updated</span>
              </div>
              <Link to="/Contact" className="hero_cta">Need coordination help?</Link>
            </div>
          </div>
        </section>

        <section className="report_layout">
          <form className="report_form">
            <div className="form_header">
              <h2>Alert details</h2>
              <p>Give us a clear description and we will handle coordination with nearby responders.</p>
            </div>

            <div className="form_field">
              <label htmlFor="snakeType">Snake type</label>
              <div className="report_select" ref={selectRef}>
                <button
                  type="button"
                  id="snakeType"
                  className={`report_select_button${snakeType ? '' : ' is-placeholder'}`}
                  aria-haspopup="listbox"
                  aria-expanded={selectOpen}
                  onClick={toggleSelect}
                  onKeyDown={onSelectKeyDown}
                >
                  {snakeType || 'Select snake type'}
                </button>
                {selectOpen && (
                  <ul className="report_select_menu" role="listbox" tabIndex={-1}>
                    {snakeOptions.map((opt, i) => (
                      <li
                        key={opt}
                        role="option"
                        aria-selected={snakeType === opt}
                        className={`report_select_option${i === highlightIndex ? ' is-active' : ''}${snakeType === opt ? ' is-selected' : ''}`}
                        onMouseEnter={() => setHighlightIndex(i)}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => onOptionChoose(i)}
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
                <select
                  name="snakeType"
                  className="report_select_native"
                  value={snakeType}
                  onChange={(e) => setSnakeType(e.target.value)}
                  required
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <option value="" disabled hidden></option>
                  {snakeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form_field">
              <label htmlFor="area">Area or landmark</label>
              <input id="area" type="text" name="area" placeholder="Home porch, school yard, paddy field…" required />
            </div>

            <div className="form_field">
              <label htmlFor="location">Location coordinates</label>
              <div className="report_location_row">
                <input
                  className="report_location_input"
                  id="location"
                  type="text"
                  name="location"
                  placeholder="Latitude, Longitude (e.g. 6.927100, 79.861200)"
                  value={locationStr}
                  onChange={(e) => {
                    const v = e.target.value
                    setLocationStr(v)
                    const m = v.match(/^\s*([+-]?\d+(?:\.\d+)?)\s*,\s*([+-]?\d+(?:\.\d+)?)\s*$/)
                    if (m) {
                      const lat = Number(m[1])
                      const lon = Number(m[2])
                      if (!Number.isNaN(lat) && !Number.isNaN(lon)) setCoords({ lat, lon })
                    } else {
                      setCoords(null)
                    }
                  }}
                  required
                />
                <button type="button" className="report_set_location_btn" onClick={handleSetLocation}>
                  Use my location
                </button>
              </div>
              <p className="field_hint">Allow GPS or paste coordinates from your map app. We only share them with the assigned responder.</p>
              <div className="report_location_meta">
                {coords ? (
                  <div>
                    <div className="coords_line">
                      Lat <strong>{coords.lat.toFixed(6)}</strong> · Lon <strong>{coords.lon.toFixed(6)}</strong>
                      <button type="button" className="btn_small" onClick={() => navigator.clipboard?.writeText(`${coords.lat}, ${coords.lon}`)}>Copy</button>
                    </div>
                    <div className="map_wrap">
                      <iframe
                        title="user-location-map"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${(coords.lon - 0.02).toFixed(6)}%2C${(coords.lat - 0.02).toFixed(6)}%2C${(coords.lon + 0.02).toFixed(6)}%2C${(coords.lat + 0.02).toFixed(6)}&layer=mapnik&marker=${coords.lat.toFixed(6)}%2C${coords.lon.toFixed(6)}`}
                        loading="lazy"
                        style={{ border: 0 }}
                      />
                      <div className="map_link"><a href={`https://www.openstreetmap.org/?mlat=${coords.lat}&mlon=${coords.lon}#map=15/${coords.lat}/${coords.lon}`} target="_blank" rel="noopener noreferrer">Open larger map</a></div>
                    </div>
                  </div>
                ) : (
                  <div className="muted">No valid coordinates yet. Allow location access or enter manually as "latitude, longitude".</div>
                )}
              </div>
            </div>

            <div className="form_field">
              <label htmlFor="description">Describe what you see</label>
              <textarea id="description" name="description" placeholder="Snake behaviour, size, colour, injuries, number of people nearby, emergency details…" rows="5" required></textarea>
            </div>

            <div className="form_actions">
              <button type="submit" className="report_submit">Submit report</button>
              <p className="privacy_note">Submitting sends your details securely to SarpResQ dispatch. We never publish exact addresses.</p>
            </div>
          </form>

          <aside className="report_info">
            <div className="info_card">
              <h3>Before responders arrive</h3>
              <ul>
                <li>Keep everyone, including pets, at least 6 metres away.</li>
                <li>Do not attempt to handle or trap the snake.</li>
                <li>Observe distinctive colours or hood markings from a safe distance.</li>
              </ul>
            </div>
            <div className="info_card">
              <h3>What happens next</h3>
              <p>Your report pings volunteers in your district, shares photos if provided, and alerts partner hospitals when required.</p>
              <Link to="/Categories">View species gallery</Link>
            </div>
            <div className="info_card emergency">
              <h3>Bite emergency?</h3>
              <p>Call 1990 Suwa Seriya or head to the nearest antivenom-ready hospital immediately.</p>
              <Link to="/Hospital">See hospital map</Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default Report