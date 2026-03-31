import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../navigation/Navbar'
import './Hospital.css'

const HOSPITALS = [
  { id: 1, name: 'Colombo General Hospital', lat: 6.9000, lon: 79.8567, phone: '+94112345678', antivenomStock: 0 },
  { id: 2, name: 'Kandy Teaching Hospital', lat: 7.2906, lon: 80.6337, phone: '+94771234567', antivenomStock: 6 },
  { id: 3, name: 'Galle General Hospital', lat: 6.0535, lon: 80.2210, phone: '+94771234568', antivenomStock: 2 },
  { id: 4, name: 'Jaffna Teaching Hospital', lat: 9.6615, lon: 80.0255, phone: '+94771234569', antivenomStock: 0 },
  { id: 5, name: 'Matara District Hospital', lat: 5.9484, lon: 80.5359, phone: '+94771234570', antivenomStock: 1 }
]

// Haversine distance (km)
function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRad = (v) => (v * Math.PI) / 180
  const R = 6371 // km
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export default function Hospital() {
  const [userPos, setUserPos] = useState(null)
  const [error, setError] = useState(null)
  const [nearest, setNearest] = useState(null)
  const [nearestWithStock, setNearestWithStock] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sortedHospitals, setSortedHospitals] = useState(HOSPITALS)

  useEffect(() => {
    // Try to get user's location automatically
    setLoading(true)
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lon: pos.coords.longitude }
        setUserPos(coords)
        setLoading(false)
      },
      (err) => {
        setError('Unable to retrieve your location. Please allow location access or enter manually.')
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }, [])

  useEffect(() => {
    if (!userPos) return
    // compute nearest and nearest with stock
    const withDistances = HOSPITALS.map((h) => ({
      ...h,
      distanceKm: haversineDistance(userPos.lat, userPos.lon, h.lat, h.lon)
    }))
    withDistances.sort((a, b) => a.distanceKm - b.distanceKm)
    setNearest(withDistances[0])
    const stocked = withDistances.find((h) => h.antivenomStock > 0)
    setNearestWithStock(stocked || null)
    setSortedHospitals(withDistances)
  }, [userPos])

  const refreshLocation = () => {
    setError(null)
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({ lat: pos.coords.latitude, lon: pos.coords.longitude })
        setLoading(false)
      },
      (err) => {
        setError('Unable to retrieve your location. Please allow location access or enter manually.')
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }

  const openDirections = (lat, lon) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`

  const getOsmEmbed = (lat, lon) => {
    const delta = 0.03
    const left = lon - delta
    const right = lon + delta
    const top = lat + delta
    const bottom = lat - delta
    return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${lat}%2C${lon}`
  }

  const getOsmLink = (lat, lon) => `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=14/${lat}/${lon}`

  const copyCoords = (lat, lon) => {
    const text = `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`
    navigator.clipboard?.writeText(text)
  }

  const stats = useMemo(() => {
    const withStock = HOSPITALS.filter((h) => h.antivenomStock > 0).length
    const total = HOSPITALS.length
    return {
      total,
      withStock,
      withoutStock: total - withStock
    }
  }, [])

  const coverage = stats.total ? Math.round((stats.withStock / stats.total) * 100) : 0

  const locationStatus = userPos ? 'Coordinates locked' : loading ? 'Detecting location…' : 'Location not available'
  const locationTone = userPos ? 'success' : error ? 'alert' : 'muted'

  return (
    <div className="hospital_page">
      <Navbar />
      <main className="hospital_main">
        <section className="hospital_hero">
          <div className="hero_overlay" aria-hidden="true"></div>
          <div className="hero_content">
            <div className="hero_copy">
              <span className="hero_badge">Emergency ready</span>
              <h1>Find antivenom-ready care in minutes</h1>
              <p>Share live hospital intelligence with first responders. Detect your location, confirm antivenom stock, and start directions without losing time.</p>
              <div className="hero_actions">
                <button className="btn primary" onClick={refreshLocation} disabled={loading}>
                  {loading ? 'Locating…' : 'Refresh location'}
                </button>
                <button className="btn secondary" onClick={() => window.location.reload()}>
                  Reload app
                </button>
              </div>
              <p className="hero_hint">Tip: keep location services enabled so rescues can dispatch to the closest antivenom stock.</p>
            </div>
            <aside className="hero_stats">
              <div className="stat_card">
                <span className="stat_label">Hospitals monitored</span>
                <span className="stat_num">{stats.total}</span>
                <span className="stat_meta">Island-wide network</span>
              </div>
              <div className="stat_card">
                <span className="stat_label">Antivenom ready</span>
                <span className="stat_num">{stats.withStock}</span>
                <span className="stat_meta">{coverage}% coverage</span>
              </div>
              <div className="stat_card highlight">
                <span className="stat_label">Nearest supply</span>
                <span className="stat_num">{nearestWithStock ? nearestWithStock.name : 'Awaiting location'}</span>
                <span className="stat_meta">
                  {nearestWithStock && typeof nearestWithStock.distanceKm === 'number'
                    ? `${nearestWithStock.distanceKm.toFixed(1)} km away`
                    : 'Allow access to see distance'}
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section className="hospital_status">
          <div className="status_pills">
            <span className={`status_chip ${locationTone}`}>
              <span className="chip_dot" aria-hidden="true"></span>
              {locationStatus}
            </span>
            <span className="status_chip neutral">Hospitals listed: {stats.total}</span>
            <span className="status_chip calm">Antivenom sites: {stats.withStock}</span>
          </div>
          {error && <div className="status_message">{error}</div>}
        </section>

        <section className="hospital_layout">
          <article className="panel location_panel">
            <header className="panel_header">
              <div>
                <h2>Live location</h2>
                <p className="panel_hint">Grant GPS to surface the closest emergency room.</p>
              </div>
              <span className={`status_dot ${userPos ? 'online' : 'offline'}`} aria-hidden="true"></span>
            </header>

            {loading && <div className="panel_state">Detecting location…</div>}

            {userPos && !loading && (
              <div className="location_body">
                <div className="location_meta">
                  <div className="meta_row">
                    <span className="meta_label">Latitude</span>
                    <span className="meta_value">{userPos.lat.toFixed(5)}</span>
                  </div>
                  <div className="meta_row">
                    <span className="meta_label">Longitude</span>
                    <span className="meta_value">{userPos.lon.toFixed(5)}</span>
                  </div>
                </div>
                <div className="location_actions">
                  <button className="btn tertiary" onClick={() => copyCoords(userPos.lat, userPos.lon)}>Copy coordinates</button>
                  <a className="btn secondary" href={getOsmLink(userPos.lat, userPos.lon)} target="_blank" rel="noopener noreferrer">Open map</a>
                </div>
                <div className="location_map">
                  <iframe
                    src={getOsmEmbed(userPos.lat, userPos.lon)}
                    loading="lazy"
                    title="Your location map"
                  ></iframe>
                </div>
              </div>
            )}

            {!userPos && !loading && (
              <div className="panel_state muted">Location not available. Enable GPS or try again above.</div>
            )}
          </article>

          <article className="panel priority_panel">
            <h2>Priority care</h2>
            <div className="priority_cards">
              <div className="priority_card">
                <div className="priority_header">
                  <span className="priority_badge">Closest emergency</span>
                  <span className={`availability_badge ${nearest && nearest.antivenomStock > 0 ? 'in' : 'out'}`}>
                    {nearest ? (nearest.antivenomStock > 0 ? 'Antivenom stocked' : 'No antivenom') : 'Pending'}
                  </span>
                </div>
                {nearest ? (
                  <div className="priority_body">
                    <h3>{nearest.name}</h3>
                    <p>{typeof nearest.distanceKm === 'number' ? `${nearest.distanceKm.toFixed(1)} km away` : 'Distance will appear once location is detected.'}</p>
                    <p>Phone: <a href={`tel:${nearest.phone}`}>{nearest.phone}</a></p>
                    <div className="priority_actions">
                      <a className="btn primary" href={openDirections(nearest.lat, nearest.lon)} target="_blank" rel="noopener noreferrer">Get directions</a>
                      <a className="btn secondary" href={`tel:${nearest.phone}`}>Call now</a>
                    </div>
                  </div>
                ) : (
                  <div className="priority_placeholder">Grant location access to surface the closest facility.</div>
                )}
              </div>

              <div className="priority_card calm">
                <div className="priority_header">
                  <span className="priority_badge calm">Nearest with antivenom</span>
                  <span className="availability_badge in">{nearestWithStock ? `${nearestWithStock.antivenomStock} doses` : 'Awaiting'}</span>
                </div>
                {nearestWithStock ? (
                  <div className="priority_body">
                    <h3>{nearestWithStock.name}</h3>
                    <p>{typeof nearestWithStock.distanceKm === 'number' ? `${nearestWithStock.distanceKm.toFixed(1)} km away` : 'Distance will appear once location is detected.'}</p>
                    <p>Phone: <a href={`tel:${nearestWithStock.phone}`}>{nearestWithStock.phone}</a></p>
                    <div className="priority_actions">
                      <a className="btn primary" href={openDirections(nearestWithStock.lat, nearestWithStock.lon)} target="_blank" rel="noopener noreferrer">Navigate</a>
                      <a className="btn secondary" href={`tel:${nearestWithStock.phone}`}>Call triage</a>
                    </div>
                  </div>
                ) : (
                  <div className="priority_placeholder">No stocked facility detected in range yet.</div>
                )}
              </div>
            </div>
          </article>
        </section>

        <section className="hospital_directory">
          <div className="directory_header">
            <h2>Hospital directory</h2>
            <p>Sorted by proximity once we locate you. Tap a card to launch directions or call ahead.</p>
          </div>
          <div className="directory_grid">
            {sortedHospitals.map((hospital) => (
              <article key={hospital.id} className="directory_card">
                <header className="directory_title">
                  <h3>{hospital.name}</h3>
                  <span className={`availability_badge ${hospital.antivenomStock > 0 ? 'in' : 'out'}`}>
                    {hospital.antivenomStock > 0 ? `${hospital.antivenomStock} doses ready` : 'Check availability'}
                  </span>
                </header>
                <div className="directory_meta">
                  <div className="meta_item">
                    <span className="meta_label">Distance</span>
                    <span className="meta_value">
                      {typeof hospital.distanceKm === 'number' ? `${hospital.distanceKm.toFixed(1)} km` : 'Pending'}
                    </span>
                  </div>
                  <div className="meta_item">
                    <span className="meta_label">Phone</span>
                    <a className="meta_value" href={`tel:${hospital.phone}`}>{hospital.phone}</a>
                  </div>
                </div>
                <div className="directory_actions">
                  <a className="btn tertiary" href={openDirections(hospital.lat, hospital.lon)} target="_blank" rel="noopener noreferrer">Directions</a>
                  <a className="btn secondary" href={`tel:${hospital.phone}`}>Call</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="guidance_section">
          <h2>Immediate actions after a bite</h2>
          <div className="guidance_grid">
            <ol className="guidance_list">
              <li>Move the patient to a safe area and keep them calm.</li>
              <li>Call emergency services or the highlighted hospital immediately.</li>
              <li>Immobilize the affected limb below heart level if possible.</li>
              <li>Remove rings, watches, or tight clothing near the bite.</li>
              <li>Do not cut the wound, suck the venom, or apply a tourniquet.</li>
              <li>Record the time of the bite and, if safe, take a photo of the snake for identification.</li>
              <li>Transport the patient to a hospital without delay—antivenom is most effective early.</li>
            </ol>
            <div className="guidance_cta">
              <div className="cta_card">
                <h3>Need urgent help?</h3>
                <p>Alert first responders and share the live hospital card so teams prepare antivenom before you arrive.</p>
                <div className="cta_actions">
                  <a className="btn emergency" href="tel:119">Call emergency (119)</a>
                  <button className="btn secondary" onClick={() => navigator.clipboard?.writeText('Patient bite timestamp: ' + new Date().toISOString())}>Copy timestamp</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
