import React, { useContext } from "react";
import { AutentiContext } from "../../context/ContextAutentificacion";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/carrito.png";
import "./navbar.css";

const Navbar = () => {
    const { usuario, cerrarSesion, cargando } = useContext(AutentiContext);

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="">
                    <img src={Logo} alt="logo" height={50} width={50} />
                    <Link className="navbar-brand text-white" to="/">
                        <strong className="titulo">Mercado People</strong>
                    </Link>
                </div>

                <ul className="navbar-nav ">
                    {usuario?.activo ? (
                        <>

                        </>
                    ) : (
                        <>
                            {/* private */}
                            <li className="nav-item">
                                <span className="nav-link text-white"></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white" onClick={cerrarSesion}>
                                    Cerrar sesión
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/favoritos">
                                    Favoritos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/vender">
                                    Vender
                                </Link>
                            </li>
                            {/* public */}
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/products">
                                    <strong>Categoria Productos</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/singup">
                                    Registrate
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">
                                    Iniciar Sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Detail">
                                    <strong>Detalle</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/carro">
                                    <i className="fa-solid fa-cart-shopping"> $0</i>
                                </Link>

                            </li>
                        </>
                    )}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
