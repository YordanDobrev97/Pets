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
import AddPet from './components/AddPet'
import AuthContext from './context/AuthContext'
import { useState } from "react"
import { useCookies } from 'react-cookie'
import PetDetails from './components/PetDetails'
import UserPets from './components/UserPets'

function App() {
  const [cookies] = useCookies(['name'])
  const [isAuthenticated, setAuthenticated] = useState(cookies?.jwt)

  return (
    <div className="one-img" id="header">
      <Router className="App">
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
          <div className="header-w3layouts">
            <Navbar />
          </div>

          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='services' element={<Services />} />
            <Route path='about' element={<About />} />
            <Route path='pets'>
              <Route path=':petId' element={<PetDetails />} />
              <Route path='add' element={<AddPet />} />
              <Route path='all' element={<Gallery />} />
            </Route>
            <Route path='myPets' element={<UserPets />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
