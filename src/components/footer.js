import React from 'react';
import Facebook from '../Assets/Icons/Facebook';
import Instagram from '../Assets/Icons/Instagram';
import Youtube from '../Assets/Icons/Youtube';

export default function Footer() {
    return (
        <footer className="login-footer">
            <hr className="login-footer-border" />
            <div class="login-footer-container">
                <div class="login-footer-sec1">
                    <p>
                        © <time dateTime={2023}>2023</time>
                    </p>
                    <address>
                        KK Group of Residency, Virajpet | Designed by Aashan
                        Creative Studio
                    </address>
                </div>
                <ul class="login-footer-sec2">
                    <li>
                        <a href="#">
                            facebook
                            <span aria-hidden="true">
                                <Facebook />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            instagram
                            <span aria-hidden="true">
                                <Instagram />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            youtube
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
