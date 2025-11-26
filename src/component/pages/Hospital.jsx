import React, { useEffect, useState } from 'react'
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

  return (
    <div className="hospital-page page-wrap">
      <Navbar />

      <section className="hospital-hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Nearest Hospitals & Antivenom Stock</h1>
            <p className="lead">When someone is bitten by a snake, get to a hospital quickly. This page finds nearby hospitals and shows antivenom availability.</p>
            <div className="controls">
              <button className="btn" onClick={refreshLocation} disabled={loading}>Refresh location</button>
              <button className="btn ghost" onClick={() => { window.location.reload() }}>Reload App</button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden>
            <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#34d399" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="160" height="120" rx="14" fill="url(#g1)" opacity="0.12" />
              <g transform="translate(18,20)">
                <circle cx="36" cy="24" r="18" fill="#fff" opacity="0.9" />
                <path d="M36 14v12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 24h20" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="hospital-content">
        <div className="panel">
          <h2>Your Location</h2>
          {loading && <div className="muted">Detecting location…</div>}
          {error && <div className="error">{error}</div>}
          {userPos ? (
            <div>
              <div className="location-row">
                <div className="location-info">Lat: {userPos.lat.toFixed(5)}, Lon: {userPos.lon.toFixed(5)}</div>
                <div className="location-actions">
                  <button className="btn" onClick={() => copyCoords(userPos.lat, userPos.lon)}>Copy</button>
                  <a className="btn" href={getOsmLink(userPos.lat, userPos.lon)} target="_blank" rel="noopener noreferrer">Open map</a>
                </div>
              </div>

              <div className="map-embed">
                <iframe
                  src={getOsmEmbed(userPos.lat, userPos.lon)}
                  style={{ border: '0' }}
                  loading="lazy"
                  title="Your location map"
                ></iframe>
              </div>
            </div>
          ) : (
            !loading && <div className="muted">Location not available. Allow location access or use a device with GPS.</div>
          )}
        </div>

        <div className="panel">
          <h2>Nearest Hospital</h2>
          {!userPos && <div className="muted">Waiting for location…</div>}
          {nearest && (
            <div className="hospital-card card-elevate">
              <div className="hospital-avatar" aria-hidden>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" fill="#f0fff4" />
                  <path d="M12 7v6" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M9 10h6" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="hospital-main">
                <div className="hospital-name">{nearest.name}</div>
                <div className="hospital-distance">{nearest.distanceKm.toFixed(2)} km away</div>
                <div className="hospital-phone">Phone: <a href={`tel:${nearest.phone}`}>{nearest.phone}</a></div>
                <div className={`antivenom ${nearest.antivenomStock > 0 ? 'in' : 'out'}`}>
                  {nearest.antivenomStock > 0 ? `${nearest.antivenomStock} antivenom injections in stock` : 'No antivenom in stock'}
                </div>
              </div>
              <div className="hospital-actions">
                <a className="btn primary" href={openDirections(nearest.lat, nearest.lon)} target="_blank" rel="noopener noreferrer">Directions</a>
                <a className="btn" href={`tel:${nearest.phone}`}>Call</a>
              </div>
            </div>
          )}
        </div>

        <div className="panel">
          <h2>Nearest Hospital With Antivenom</h2>
          {nearestWithStock ? (
            <div className="hospital-card card-elevate">
              <div className="hospital-avatar" aria-hidden>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" fill="#fffaf0" />
                  <path d="M9 12h6" stroke="#b45309" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="hospital-main">
                <div className="hospital-name">{nearestWithStock.name}</div>
                <div className="hospital-distance">{nearestWithStock.distanceKm.toFixed(2)} km away</div>
                <div className="hospital-phone">Phone: <a href={`tel:${nearestWithStock.phone}`}>{nearestWithStock.phone}</a></div>
                <div className="antivenom in">{nearestWithStock.antivenomStock} antivenom injections in stock</div>
              </div>
              <div className="hospital-actions">
                <a className="btn primary" href={openDirections(nearestWithStock.lat, nearestWithStock.lon)} target="_blank" rel="noopener noreferrer">Directions</a>
                <a className="btn" href={`tel:${nearestWithStock.phone}`}>Call</a>
              </div>
            </div>
          ) : (
            <div className="muted">No nearby hospital with antivenom found in dataset.</div>
          )}
        </div>
      </section>

      <section className="what-to-do">
        <h2>What to do if bitten</h2>
        <ol>
          <li>Stay calm and move the person away from the snake to a safe area.</li>
          <li>Call emergency services or the hospital shown above immediately.</li>
          <li>Keep the affected limb immobilized and below heart level if possible.</li>
          <li>Remove jewelry or tight clothing near the bite (swelling may occur).</li>
          <li>Do not cut the wound, suck the venom, or apply a tourniquet.</li>
          <li>If possible, note the time of the bite and take a photo of the snake only if it is safe to do so.</li>
          <li>Get to the nearest hospital quickly — antivenom may be time-sensitive.</li>
        </ol>
        <div className="cta-row">
          <a className="btn emergency" href="tel:119">Call Emergency (119)</a>
          <button className="btn" onClick={() => navigator.clipboard?.writeText('Patient bit time: ' + new Date().toISOString())}>Copy timestamp</button>
        </div>
      </section>
    </div>
  )
}
