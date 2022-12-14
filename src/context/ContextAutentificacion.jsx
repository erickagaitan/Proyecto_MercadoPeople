import React, { createContext, useState, useEffect } from "react"

export const AutentiContext = createContext()

const ContextAutentificacion = ({ children }) => {

    const [usuario, setUsuario] = useState()
    const [cargando, setCargando] = useState(true)
    const [actualizo, setActualizo] = useState()

    const cerrarSesion = () => {
        setUsuario()
        const sesion = window.localStorage.getItem('usuario')
        const usuario = JSON.parse(sesion)
        usuario.activo = false
        const nuevoItemStr = JSON.stringify(usuario)
        localStorage.setItem('usuario', nuevoItemStr)
        setUsuario()
    }

    useEffect(() => {

        const sesion = window.localStorage.getItem('usuario')
        const usuario = JSON.parse(sesion)

        //const formData = {email: "invitado@gmail.com", password:123456,activo:false}
        //window.localStorage.setItem('usuario',JSON.stringify(formData))

        setUsuario(usuario)
        setCargando(false)

    }, [actualizo])

    return (
        <AutentiContext.Provider
            value={{
                usuario,
                setUsuario,
                cargando,
                cerrarSesion,
                setActualizo
            }}
        >
            {children}
        </AutentiContext.Provider>

    )
}

export default ContextAutentificacion;