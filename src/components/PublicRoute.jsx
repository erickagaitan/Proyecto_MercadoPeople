import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { AutentiContext } from '../context/ContextAutentificacion';

const PublicRoute = ({children}) => {

    const { usuario } = useContext(AutentiContext)

    if(usuario?.activo === true) {
        return <Navigate to="/"></Navigate>
    } else {
        return children
    }
    
}
export default PublicRoute