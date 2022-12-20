import React from 'react'

export default function Header() {
  return (
    <header>
      <p>KK Residency</p>
      <h1 style={{ display: "none" }}>All rooms</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <a href="/login">Sign in</a>
      </nav>
    </header>
  );
}
