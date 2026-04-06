import Login from './component/pages/Login'
import Register from './component/pages/Register'
import Home from './component/pages/Home'
import Dashboard from './component/pages/Dashboard'
import DashboardLogin from './component/pages/DashboardLogin'
import Report from './component/pages/Report'
import Categories from './component/pages/Categories'
import Hospital from './component/pages/Hospital'
import Contact from './component/pages/Contact'
import About from './component/pages/About'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
  const token = localStorage.getItem('sarpresqToken');
  const rawUser = localStorage.getItem('sarpresqUser');
  const dashboardAuth = localStorage.getItem('sarpresqDashboardAuth');

  // Allow if normal user (token+user) or dashboard admin (dashboardAuth)
  if ((token && rawUser) || dashboardAuth === 'true') {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/dashboard-login" element={<DashboardLogin />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/Home" element={<Home/>} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Report" element={<Report/>} />
            <Route path="/Categories" element={<Categories/>} />
            <Route path="/Hospital" element={<Hospital/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
