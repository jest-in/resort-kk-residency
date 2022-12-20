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
            <figure>
              {/* place the facebook image here of the footer here */}
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            instagram
            <figure>
              {/* place the instagram image here of the footer here */}
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            youtube
            <figure>
              {/* place the youtube image here of the footer here */}
            </figure>
          </a>
        </li>
      </ul>
    </footer>
  );
}
