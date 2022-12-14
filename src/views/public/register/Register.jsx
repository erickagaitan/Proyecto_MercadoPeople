import React, { useState, useContext } from 'react'
import { AutentiContext } from '../../../context/ContextAutentificacion'
import Alert from '../../../components/Alert';
import { validateEmail } from '../../../utils/validacionCorreo';
import "./register.css"

const defaultValue = () => {
    return {
      nombre: '',
      apellido: '',
      ubicacion: '',
      email: '',
      telefono: '',
      password:'',
      activo:true,
    };
};

const Register = () => {

    const [formData, setFormData] = useState(defaultValue());
    const [repeatPassword, setRepeatPassword] = useState()
    const [mensaje, setMensaje] = useState()

    const { setActualizo } = useContext(AutentiContext)

    const registrar = () => {

        if (!formData.nombre || !formData.apellido || !formData.ubicacion || !formData.email || !formData.telefono || !formData.password) {
            setMensaje('Todos los campos son requeridos')
        } else if (!validateEmail(formData.email)) {
            setMensaje('Debes introducir un correo válido')
        } else if (formData.password !== repeatPassword) {
            setMensaje('El campo contraseña y repetir contraseña no coinciden')
        } else if (formData.password.length < 6) {
            setMensaje('La contraseña debe tener minimo 6 caracteres')
        } else {
            
            const sesion =window.localStorage.getItem('usuario')
            const usuario = JSON.parse(sesion)

            if(usuario?.email === formData?.email) {
                alert('ops existe un usuario registrado con el correo:', formData?.email)
            } else {
                formData.id = Math.floor(Math.random() * 2)
                window.localStorage.setItem('usuario',JSON.stringify(formData))
                const sesion = window.localStorage.getItem('usuario')
                setActualizo(JSON.stringify(sesion))
            }
        }
    }

    return (
        <div className="container mb-5">
            <div className="d-flex justify-content-center">
                <div className="card col-sm-12 col-md-12 col-lg-6 d-flex align-items-center mt-5 border-0 p-4">
                    <h1 className="mt-4">Registrate</h1>
                    <div className="row col-xs-10 col-sm-10 col-md-10 col-lg-8 justify-content-center"  style={{width: '100%'}}>
                        <div>
                            <label className="mt-3">Nombre:</label>
                            <input 
                                className="form-control form-control-lg" 
                                type="text"
                                onChange= { (e) => setFormData({...formData, nombre: e.target.value})} 
                            />
                            <label className="mt-3">Apellido:</label>
                            <input 
                                className="form-control form-control-lg" 
                                type="text" 
                                onChange= { (e) => setFormData({...formData, apellido: e.target.value})} 
                            />
                            <label className="mt-3">Ubicación:</label>
                            <input 
                                className="form-control form-control-lg" 
                                type="text" 
                                onChange= { (e) => setFormData({...formData, ubicacion: e.target.value})} 
                                />
                            <label className="mt-3">Email:</label>
                            <input 
                                className="form-control form-control-lg" 
                                type="text" 
                                onChange= { (e) => setFormData({...formData, email: e.target.value})} 
                            />
                            <label className="mt-3">Teléfono:</label>
                            <input 
                                className="form-control form-control-lg" 
                                type="text" 
                                onChange= { (e) => setFormData({...formData, telefono: e.target.value})} 
                            />
                            <label className="mt-3">Contraseña:</label>
                            <input 
                                className="form-control form-control-lg" 
                                type="password" 
                                onChange= { (e) => setFormData({...formData, password: e.target.value})} 
                            />
                            <label className="mt-3">Confirmar contraseña:</label>
                            <input className="form-control form-control-lg mb-5" type="password" onChange={(e) => setRepeatPassword( e.target.value)}/>
                            <Alert mensaje={mensaje} setMensaje={setMensaje}/>
                        </div>
                       
                        <button 
                            className="btnregistrar btn btn-success mt-3 mb-5 w-50 mt-5"
                            onClick={registrar}
                        >
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
