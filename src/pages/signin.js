import React from 'react';

// importing images
import Logo from '../Assets/Logo/KKGroupLogoWhite';
import Footer from '../components/footer';

export default function SignIn() {
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
                                <button type="submit">Sign in</button>
                            </div>
                        </form>
                        <section className="signin-actions-section">
                            <a
                                href="/forgot-password"
                                className="existing-user-link"
                            >
                                Forgot password ?
                            </a>
                            <a
                                href="/register"
                                className="existing-user-link new-user-link"
                            >
                                Dont have an account ?
                            </a>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
