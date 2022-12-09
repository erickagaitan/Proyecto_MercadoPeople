import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { AutentiContext } from '../context/ContextAutentificacion';

const ProtectedRoute = ({children}) => {

    const { usuario } = useContext(AutentiContext)
   
    if(usuario?.activo === true) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
    
}
export default ProtectedRoute