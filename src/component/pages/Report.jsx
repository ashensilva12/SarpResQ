import React from 'react'
import Navbar from '../navigation/Navbar'
import { Link } from 'react-router-dom'
import './Report.css'

function Report() {
    return (
      <div className="report-page">
          <Navbar />
          <div className="report-container">
            <div className="report-card">
              <h1 className="report-title">Report</h1>
              <form>
              <table className="report-table">
                <tr>
                  <td>Snake Type :</td>
                  <td>
                    <select name="snakeType" required>
                      <option value="Cobra">Cobra</option>
                      <option value="Krait">Krait</option>
                      <option value="Viper">Viper</option>
                      <option value="Python">Python</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Area :</td>
                  <td>
                    <input type="text" name="area" placeholder="Home" required/>
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
                    <button type="submit" className="report-submit">Submit Report</button>
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