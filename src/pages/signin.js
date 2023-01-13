import React from 'react';

// importing images
import Logo from '../Assets/Logo/KKGroupLogoWhite'
import Footer from '../components/footer';

export default function SignIn() {
    return (
        <div className="container">
            <div className="sign-in-container">
                <header className="login-div1">
                    <nav className="logo-container">
                        <a href="/">
                            <figure>
                                <Logo/>
                            </figure>
                        </a>
                    </nav>
                </header>
                <main>
                    <aside>
                        <h3>Start your journey with us</h3>
                        <figure>{/* place the image here */}</figure>
                        <p>
                            Best rooms in Madikeri at affordable price. <br />
                            Contact KK Resort.
                        </p>
                    </aside>
                    <div>
                        <form action="#">
                            <p>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="enter email here"
                                    required
                                />
                            </p>
                            <p>
                                <label htmlFor="password">password</label>
                                <br />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="enter password here"
                                    required
                                />
                            </p>
                            <button type="submit">Sign in</button>
                        </form>
                        <section>
                            <a href="/forgot-password">forgot password?</a>
                            <a href="/register">Dont't have an account?</a>
                        </section>
                    </div>
                </main>
            </div>
            
            <Footer/>

        </div>
    );
}
