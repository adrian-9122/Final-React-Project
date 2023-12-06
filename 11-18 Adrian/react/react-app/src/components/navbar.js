// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Brand/logo */}
                <Link className="navbar-brand" to="/">
                    Your Logo
                </Link>

                {/* Navbar toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {/* Home button */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        {/* Customers button */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/customers">
                                Customers
                            </Link>
                        </li>

                        {/* Products button */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                Products
                            </Link>
                        </li>

                        {/* Sales button */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/sales">
                                Sales
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;