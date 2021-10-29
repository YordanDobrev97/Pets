const Login = () => {
    return (

        <section class="login-block slider-img one-img">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 login-sec">
                        <h2 class="text-center">Login Now</h2>
                        <form class="login-form">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="text-uppercase">Username</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                                <input type="password" class="form-control" placeholder="" />
                            </div>

                            <button type="submit" class="btn btn-login float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login