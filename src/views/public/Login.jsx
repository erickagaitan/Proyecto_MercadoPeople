import React, { useContext, useState } from 'react'
import { AutentiContext } from '../../context/ContextAutentificacion'

const Login = () => {

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const { setUsuario } = useContext(AutentiContext)
   
    const iniciarSesion = () => {
        try {
            const sesion =window.localStorage.getItem('usuario')
            const usuario = JSON.parse(sesion)

            if(!sesion){
                alert('Usuario no existe')
            } else if (usuario?.email != email){
                console.log(usuario?.email != email)
                alert('usuario no existe')
            } else if (usuario?.password != password){
                alert('La contraseña es incorrecta')
            } else {
                usuario.activo = true
                const nuevoItemStr = JSON.stringify(usuario)
                localStorage.setItem('usuario', nuevoItemStr)  
                setUsuario(usuario)
            }  
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="card col-lg-5 d-flex align-items-center mt-5 border-0">
                    <h1>Iniciar Sesión</h1>
                    <div className="row col-md-8 col-lg-6 col-8 justify-content-center"  style={{width: '18rem'}}>
                        <div>
                            <label className="mt-3">Usuario:</label>
                            <input className="form-control form-control-lg" type="text" onChange= {(e) => setEmail(e.target.value)} />
                            <label className="mt-3">Contraseña:</label>
                            <input className="form-control form-control-lg" type="password" onChange= {(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-success mt-3 mb-5 w-50" onClick={iniciarSesion} >Acceder</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login