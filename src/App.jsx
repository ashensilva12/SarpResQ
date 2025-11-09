import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/pages/Login'
import Login from './component/pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
