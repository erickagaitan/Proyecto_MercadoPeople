import React,{createContext,useState,useEffect} from "react"

export const AutentiContext = createContext()

const ContextAutentificacion = ({children})=>{

    const [usuario, setUsuario]=useState()
    const [cargando, setCargando]=useState(true)

    const cerrarSesion = () => {
        try {
            const sesion =window.localStorage.getItem('usuario')
            const usuario = JSON.parse(sesion)
            usuario.activo = false
            const nuevoItemStr = JSON.stringify(usuario)
            localStorage.setItem('usuario', nuevoItemStr)  
            setUsuario(usuario)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (()=>{
        try {
            const sesion = window.localStorage.getItem('usuario')
            const usuario = JSON.parse(sesion)
            console.log(usuario)
            setUsuario(usuario)
            setCargando(false)
        } catch (error) {
            console.log(error)
        }
    },[])
 
    return (
        <AutentiContext.Provider
            value = {{
                usuario,
                setUsuario,
                cargando,
                cerrarSesion
            }}
        >
            {children}
        </AutentiContext.Provider>

    )
}

export default ContextAutentificacion;