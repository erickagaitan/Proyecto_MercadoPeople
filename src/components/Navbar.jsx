import React, { useContext } from 'react'
import { AutentiContext } from '../context/ContextAutentificacion'
import { Link } from "react-router-dom"

const Navbar = () => {

    const { usuario, cerrarSesion, cargando} = useContext(AutentiContext)
    
    return (
        <nav className="navbar navbar-expand-lg bg-green">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/"><strong>Mercado People</strong></Link>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/products"><strong>Categoria Productos</strong></Link>
                    </li>

                    { usuario?.activo ? 
                        <>
                            <li className="nav-item">
                                <span className="nav-link text-white">{ usuario.email} </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white" onClick={cerrarSesion}>Cerrar sesión</span>
                            </li>
                        </>
                    : 
                        <>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/singup" >Registrate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white"  to="/login">Iniciar Sesión</Link>
                            </li>
                        </>
                    }

                    <li className="nav-item">
                        <Link className="nav-link text-white"  to="/favoritos">Favoritos</Link>
                    </li>
                    <li className="nav-item">

                        <Link className="nav-link text-white" to="/Detail"><strong>Detalle</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white">Registrate</Link>
                    </li>
                 
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/pagar"><i className="fa-solid fa-cart-shopping"> $0</i></Link>

                        <Link className="nav-link text-white"  to="/carro">Carro</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white"  to="/vender">Vender</Link>

                    </li>
                </ul>


            </div>
        </nav>
    )
}

export default Navbar