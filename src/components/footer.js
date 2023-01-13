import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          © <time dateTime={2022}>2022</time>
        </p>
        <address>
          KK Group of Residency, Virajpet | Designed by Aashan Creative Studio
        </address>
      </div>
      <ul>
        <li>
          <a href="#">
            facebook
            <span aria-hidden='true'>
              {/* place the facebook svg */}
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            instagram
            <span aria-hidden='true'>
              {/* place the instagram svg */}
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            youtube
            <span aria-hidden='true'>
              {/* place the youtube svg */}
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
