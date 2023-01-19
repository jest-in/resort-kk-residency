import React from 'react';
import Facebook from '../Assets/Icons/Facebook';
import Instagram from '../Assets/Icons/Instagram';
import Youtube from '../Assets/Icons/Youtube';

export default function Footer() {
    return (
        <footer className="login-footer">
            <div>
                <p>
                    © <time dateTime={2022}>2022</time>
                </p>
                <address>
                    KK Group of Residency, Virajpet | Designed by Aashan
                    Creative Studio
                </address>
            </div>
            <ul>
                <li>
                    <a href="#">
                        facebook
                        <span aria-hidden="true">
                            {/* place the facebook svg */}
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        instagram
                        <span aria-hidden="true">
                            {/* place the instagram svg */}
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        youtube
                        <span aria-hidden="true">
                            {/* place the youtube svg */}
                        </span>
                    </a>
                </li>
            </ul>

            <hr className="login-footer-border" />
            <div class="login-footer-container">
                <div class="login-footer-sec1">
                    <p>
                        © 2022 KK Groop of Residency, Virajpet | Designed by
                        Aashan Creative Studio
                    </p>
                </div>
                <div class="login-footer-sec2">
                    <a href="#">
                        <Facebook />
                    </a>
                    <a href="#">
                        <Instagram />
                    </a>
                    <a href="#">
                        <Youtube />
                    </a>
                </div>
            </div>
        </footer>
    );
}
