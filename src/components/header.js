import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <p>KK Residency</p>
      <h1 style={{ display: "none" }}>All rooms</h1>
      <nav>
        <ul>
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
        <Link to="/login">Sign in</Link>
      </nav>
    </header>
  );
}
