import React from 'react';
import Footer from '../components/footer';
import Logo from '../Assets/Logo/KKGroupLogoWhite';
import Header from '../components/header';

export default function SignUp() {
    return (
        <div className="container">
            <div className="sign-in-container">
                <div className="login-div1">
                    <div className="login-div1-container">
                        <header>
                            <nav className="logo-container">
                                <a href="/">
                                    <figure>
                                        <Logo />
                                    </figure>
                                </a>
                            </nav>
                        </header>
                        <aside>
                            <div className="login-head-container">
                                <h3>Start your journey with us.</h3>
                            </div>
                            <figure className="login-image-container">
                                {/* place the image here */}
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
                    <div class="login-form-container">
                        <form action="#">
                            <p className="login-entries-div">
                                <label
                                    class="login-entries-label"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder=""
                                    required
                                />
                                <label htmlFor="error" class="login-error">
                                    Error Message
                                </label>
                            </p>
                            <p className="login-entries-div">
                                <label
                                    class="login-entries-label"
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
                                <label htmlFor="error" class="login-error">
                                    Error Message
                                </label>
                            </p>
                            <p className="login-entries-div">
                                <label
                                    class="login-entries-label"
                                    htmlFor="phone"
                                >
                                    Phone number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder=""
                                    required
                                />
                                <label htmlFor="error" class="login-error">
                                    Error Message
                                </label>
                            </p>
                            <p className="login-entries-div">
                                <label
                                    class="login-entries-label"
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
                                <label htmlFor="error" class="login-error">
                                    Error Message
                                </label>
                            </p>
                            <div className="login-create-btn-div">
                                <button type="submit">Create account</button>
                            </div>
                        </form>
                        <section className="signin-actions-section">
                            <a
                                href="/forgot-password"
                                className="existing-user-link"
                            >
                                Already have an account ?
                            </a>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
