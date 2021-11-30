import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UsersService from '../services/UsersService'
import { useCookies } from 'react-cookie'
import AuthContext from '../context/AuthContext'

const Register = () => {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [notification, setNotification] = useState('')
    const [cookies, setCookie] = useCookies(['name'])
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const register = async () => {
        if (password === confirmPassword) {
            const response = await UsersService.register(email, username, password)
            if (response.status === 200) {
                setCookie('jwt', response.data.token)
                context.setAuthenticated(oldValue => true)
                navigate('/')
            } else {
                setNotification('Invalid credentials!')
            }
        } else {
            setNotification('the passwords didn\'t match')
        }
    }

    return (
        <section className="slider-img one-img">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 login-sec form">
                        {notification ? (<p className="alert alert-danger">{notification}</p>) : (<React.Fragment></React.Fragment>)}
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="email" className="text-uppercase text-white">Email</label>
                                <input type="text" htmlFor="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username" className="text-uppercase text-white">Username</label>
                                <input type="text" htmlFor="username" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" class="text-uppercase text-white">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPasswordConfirm" class="text-uppercase text-white">Confirm Password</label>
                                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="" />
                            </div>

                            <button type="button" onClick={register} className="btn btn-login float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register