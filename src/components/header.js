import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// importing images
import Logo from '../Assets/Logo/KKGroupLogoBlack';

export default function Header() {
    return (
        <header className="user-nav-header">
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
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-rooms">Rooms</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
                <Link to="/login" id='signin-btn-user'>Sign in</Link>
            </nav>
        </header>
    );
}
