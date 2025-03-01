import React from 'react';
import Facebook from '../Assets/Icons/Facebook';
import Instagram from '../Assets/Icons/Instagram';
import Youtube from '../Assets/Icons/Youtube';

export default function Footer() {
    return (
        <footer className="login-footer">
            <hr className="login-footer-border" />
            <div className="login-footer-container">
                <div className="login-footer-sec1">
                    <p>
                        © <time className='footer-time' dateTime={2023}>2023</time>
                    </p>
                    <address>
                        KK Group of Residency, Virajpet | Designed by Aashan
                        Creative Studio
                    </address>
                </div>
                <ul className="login-footer-sec2">
                    <li>
                        <a href="/">
                            <span aria-hidden="true">
                                <Facebook />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span aria-hidden="true">
                                <Instagram />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span aria-hidden="true">
                                <Youtube />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
