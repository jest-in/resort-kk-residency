import React from 'react';

// importing images
import Logo from '../Assets/Logo/KKGroupLogoWhite';
import Footer from '../components/footer';
import image from "../Assets/Images/Login Image.jpg";
import { Link, NavLink } from 'react-router-dom';

export default function SignIn() {
    return (
        <div className="container">
            <div className="sign-in-container">
                <div className="login-div1">
                    <div className="login-div1-container">
                        <header>
                            <nav className="logo-container">
                                <Link to="/">
                                    <figure>
                                        <Logo />
                                    </figure>
                                </Link>
                            </nav>
                        </header>
                        <aside>
                            <div className="login-head-container">
                                <h3>Start your journey with us.</h3>
                            </div>
                            <figure className="login-image-container">
                                <img src={image} alt="resort" />
                            </figure>
                            <div className="login-caption-div">
                                <p>
                                    Best rooms in Madikeri at affordable price.{' '}
                                    <br />
                                    Contact KK Resort.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
                <main className="login-div2">
                    <div className="login-form-container">
                        <form action="#">
                            <p className="login-entries-div">
                                <label
                                    className="login-entries-label"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder=""
                                    required
                                />
                                <div>
                                    <p className="login-error">
                                        Errror Message
                                    </p>
                                </div>
                            </p>
                            <p className="login-entries-div">
                                <label
                                    className="login-entries-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder=""
                                    required
                                />
                                <div>
                                    <p className="login-error">
                                        Errror Message
                                    </p>
                                </div>
                            </p>
                            <div className="login-create-btn-div">
                                <button type="submit">Sign in</button>
                            </div>
                        </form>
                        <nav className="signin-actions-section">
                            <Link
                                to="/forgot-password"
                                className="existing-user-link"
                            >
                                Forgot password ?
                            </Link>
                            <Link
                                to="/register"
                                className="existing-user-link new-user-link"
                            >
                                Dont have an account ?
                            </Link>
                        </nav>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
