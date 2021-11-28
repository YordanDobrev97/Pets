import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import './css/main.css'
import Navbar from './components/Navbar.js'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Gallery from './components/Gallery'
import Services from './components/Services'
import About from './components/About'
import AuthContext from './context/AuthContext'
import { useState } from "react"

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)

  return (
    <div className="one-img" id="header">
      <Router className="App">
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
          <div className="header-w3layouts">
            <Navbar />
          </div>

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
