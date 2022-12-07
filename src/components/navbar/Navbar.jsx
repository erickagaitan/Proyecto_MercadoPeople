import React, { useContext } from "react";
import { AutentiContext } from "../../context/ContextAutentificacion";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/carrito.png";
import "./navbar.css";

const Navbar = () => {

    const { usuario, cerrarSesion, cargando } = useContext(AutentiContext);

    if(cargando) return <h1>Cargando ...</h1>

   
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="">
                    <img src={Logo} alt="logo" height={50} width={50} />
                    <Link className="navbar-brand text-white cursor-pointer" to="/">
                        <strong className="titulo">Mercado People</strong>
                    </Link>
                </div>

                <ul className="navbar-nav ">
  
                {/* private */}
                    <li className="}nav-item">
                        <span className="nav-link text-white cursor-pointer"></span>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white cursor-pointer" to="/favoritos">
                            Favoritos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white cursor-pointer" to="/vender">
                            Vender
                        </Link>
                    </li>

                {/* public */}
                    <li className="nav-item">
                        <Link className="nav-link text-white cursor-pointer" to="/products">
                            <strong>Categoria Productos</strong>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white cursor-pointer" to="/Detail">
                            <strong>Detalle</strong>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white cursor-pointer" to="/carro">
                            <i className="fa-solid fa-cart-shopping"> $0</i>
                        </Link>
                    </li>
                        
                    {usuario?.activo ? 
                    <li className="nav-item ms-4">
                        <Link className="nav-link text-white cursor-pointer" onClick={cerrarSesion}>
                            <strong>Cerrar sesión</strong>
                        </Link>
                    </li>
                    :
                    <>
                        <li className="nav-item ms-4">
                            <Link className="nav-link text-white cursor-pointer" to="/singup">
                                Registrate
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
