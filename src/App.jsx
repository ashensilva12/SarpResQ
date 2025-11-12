import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/pages/Login'
import Login from './component/pages/Login'
import { BrowserRouter as Router,Route,Switch }from 'react-router-dom';

function App() {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
