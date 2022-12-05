const Login = () => {

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="card col-lg-5 d-flex align-items-center mt-5 border-0">
                    <h1>Iniciar Sesión</h1>
                    <div className="row col-md-8 col-lg-6 col-8 justify-content-center">
                        <div>
                            <label className="mt-3">Usuario:</label>
                            <input className="form-control form-control-lg" type="text" />
                            <label className="mt-3">Contraseña:</label>
                            <input className="form-control form-control-lg" type="text" />
                        </div>
                        <button className="btn btn-success mt-3 mb-5 w-50">Acceder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login