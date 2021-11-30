import { Link, useNavigate } from "react-router-dom"
import NavItems from './NavItems'
import NavItem from './NavItem'
import AuthContext from '../context/AuthContext'
import { useContext, useState, useEffect } from 'react'
import React from "react"
import { useCookies } from 'react-cookie'
import jwtParser from '../utils/jwtParser'

const Navbar = () => {
    const [role, setRole] = useState()
    const context = useContext(AuthContext)
    const [cookies, setCookie, removeCookie] = useCookies(['name'])
    const navigate = useNavigate()


    useEffect(() => {
        const jwt = jwtParser(cookies?.jwt)
        setRole(jwt?.role)
    }, [])

    const logout = () => {
        context.setAuthenticated(false)
        removeCookie('jwt')
        navigate('/')
    }

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
                                <NavItem to='myPets' value='my pets' />

                                {role === 'Admin' ? (
                                    <NavItem to='pets/add' value='add' />)
                                    : <React.Fragment></React.Fragment>
                                }

                                <span>
                                    <img className="avatar" src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" alt="avatar" />
                                </span>

                                <button onClick={logout} className="text-white btn btn-link">Logout</button>
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