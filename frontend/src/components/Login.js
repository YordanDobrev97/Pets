import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UsersService from '../services/UsersService'
import { useCookies } from 'react-cookie'
import AuthContext from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [cookies, setCookie] = useCookies(['name'])
    const navigate = useNavigate()
    const context = useContext(AuthContext)

    const signIn = async () => {
        const response = await UsersService.login(email, username, password)

        if (response.status === 200) {
            setCookie('jwt', response.data.token)
            context.setAuthenticated(oldValue => true)
            navigate('/')
        }
    }

    return (
        <section className="slider-img one-img">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 login-sec form">
                        <form className="login-form">
                            <div className="form-group">
                                <label for="email" className="text-uppercase text-white">Email</label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="text-uppercase text-white">Username</label>
                                <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1" class="text-uppercase text-white">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="" />
                            </div>

                            <button type="button" onClick={signIn} className="btn btn-login float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login