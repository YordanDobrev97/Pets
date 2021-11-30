import { Link } from "react-router-dom"
import NavItems from './NavItems'
import NavItem from './NavItem'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import React from "react"

const Navbar = () => {
    const context = useContext(AuthContext)

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
                    <NavItem to='about' value='about' />
                    <NavItem to='services' value='services' />
                    <NavItem to='pets/all' value='pets' />
                    {context.isAuthenticated ? (
                        (
                            <React.Fragment>
                                <NavItem to='pets/add' value='add' />
                                <NavItem to='logout' value='logout' />
                            </React.Fragment>
                        )
                    ) : (
                        <React.Fragment>
                            <NavItem to='login' value='login' />
                            <NavItem to='register' value='register' />
                        </React.Fragment>
                    )}
                </NavItems>
            </div>
        </nav>
    )
}

export default Navbar