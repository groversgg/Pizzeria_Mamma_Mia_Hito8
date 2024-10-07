import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';
import { CartContext } from '../../Context/cartContext';
import { formatNumber } from '../../assets/js/utils';  // Asegúrate de importar la función formatNumber

const Navbar = () => {
    const { token, logout } = useContext(UserContext);
    const { obtenerTotalPagar } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="btn btn-dark me-2">Home</Link>
                        </li>
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/Profile" className="btn btn-dark me-2">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-dark me-2" onClick={logout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/Login" className="btn btn-dark me-2">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Register" className="btn btn-dark me-2">Register</Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link to="/Cart" className="btn btn-dark me-2">
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                            </Link>
                        </li>
                    </ul>
                    <Link to="/Total" className="btn btn-dark">
                        Total: $ {formatNumber(obtenerTotalPagar())}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
