import { Link } from "react-router-dom"
import NavItems from './NavItems'
import NavItem from './NavItem'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import React from "react"

const Navbar = () => {
    const items = [
        'About',
        'Services',
        'Gallery',
        'Login',
        'Register'
    ]

    const context = useContext(AuthContext)
    console.log(context)

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ display: 'flex', alignItems: 'baseline' }}>
            <div className="hedder-up">
                <Link to='/' className="title">Save a pet</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                <NavItems>
                    <NavItem value='About' />
                    <NavItem value='Services' />
                    <NavItem value='Gallerry' />
                    {context.isAuthenticated ? (
                        (
                            <NavItem value='Logout' />
                        )
                    ) : (
                        <React.Fragment>
                            <NavItem value='Login' />
                            <NavItem value='Register' />
                        </React.Fragment>
                    )}
                </NavItems>
            </div>
        </nav>
    )
}

export default Navbar