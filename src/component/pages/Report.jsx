import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../navigation/Navbar'
import { Link } from 'react-router-dom'
import './Report.css'

function Report() {
  const snakeOptions = ['Cobra','Krait','Viper','Python','Other']
  const [snakeType, setSnakeType] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const selectRef = useRef(null)
    const [location, setLocation] = useState('')

    const handleSetLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
            return
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude.toFixed(6)
                const lng = pos.coords.longitude.toFixed(6)
                setLocation(`${lat}, ${lng}`)
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
          <div className="report_main">
            <div className="report_card">
              <h1 className="report_title">Report</h1>
              <form>
              <table className="report_table">
                <tr>
                  <td>Snake Type :</td>
                  <td>
                    <div className="report_select" ref={selectRef}>
                      <button
                        type="button"
                        className={`report_select_button${snakeType ? '' : ' is-placeholder'}`}
                        aria-haspopup="listbox"
                        aria-expanded={selectOpen}
                        onClick={toggleSelect}
                        onKeyDown={onSelectKeyDown}
                      >
                      {snakeType || 'Select snake type…'}
                      </button>
                      {selectOpen && (
                        <ul className="report_select_menu" role="listbox" tabIndex="-1">
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
                  </td>
                </tr>
                <tr>
                  <td>Area :</td>
                  <td>
                    <input type="text" name="area" placeholder="Home" required/>
                  </td>
                </tr>
                <tr>
                  <td>Location :</td>
                  <td>
                    <div className="report_location_row">
                      <input
                        className="report_location_input"
                        type="text"
                        name="location"
                        placeholder="Location..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                      <button type="button" className="report_set_location_btn" onClick={handleSetLocation}>
                        Set Location
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Description :
                  </td>
                  <td>
                    <textarea name="description" placeholder="Describe the situation..." rows="4" required></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit" className="report_submit">Submit Report</button>
                  </td>
                </tr>
              </table>
              </form>
            </div>
          </div>
      </div>
    )
}

export default Report