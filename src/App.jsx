import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navigation/Navbar'
import Login from './component/pages/Login'
import Register from './component/pages/Register'
import Home from './component/pages/Home'
import Report from './component/pages/Report'
import Categories from './component/pages/Categories'
import Hospital from './component/pages/Hospital'
import { BrowserRouter as Router,Routes,Route }from 'react-router-dom';

function App() {
  return (
    <Router>    
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/Categories" element={<Categories/>} />
          <Route path="/Hospital" element={<Hospital/>} />
        </Routes>
      </div>    
    </Router>
  )
}

export default App
