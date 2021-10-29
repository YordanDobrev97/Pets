import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import './css/main.css'
import Navbar from './components/Navbar.js'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <div className="one-img" id="header">
      <Router className="App">
        <div className="header-w3layouts">
          <Navbar />
        </div>

        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
