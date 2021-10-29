import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ display: 'flex', alignItems: 'baseline' }}>
            <div className="hedder-up " >
                <Link to='/' className="title">Save a pet</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link href="#about" className="nav-link text-white display-3">About</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#service" className="nav-link text-white display-3">Service</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link text-white display-3">Gallery</a>
                    </li>
                </ul>
                <div className="nav-login">
                    <Link to='/login' className="btn login-hedder mr-md-3">
                        Login
                    </Link>
                    <Link to='/register' className="btn login-hedder mr-md-3">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar