import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// importing images
import Logo from '../Assets/Logo/KKGroupLogoBlack';

export default function Header() {
    return (
        <header className="user-nav-header">
            <p>KK Residency</p>
            <div className="user-nav-logo-div">
                <Link to="/">
                    <figure>
                        <Logo />
                    </figure>
                </Link>
            </div>
            <h1 style={{ display: 'none' }}>All rooms</h1>
            <nav className="user-nav">
                <ul className="user-nav-entries">
                    <li>
                        <NavLink
                            to="/"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/all-rooms"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            Rooms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            Contact us
                        </NavLink>
                    </li>
                </ul>
                <Link
                    to="/login"
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    Sign in
                </Link>
            </nav>
        </header>
    );
}
