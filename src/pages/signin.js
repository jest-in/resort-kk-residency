import React, { useState } from 'react';

// importing images
import Logo from '../Assets/Logo/KKGroupLogoWhite';
import Footer from '../components/footer';
import image from "../Assets/Images/Login Image.jpg";
import { Link } from 'react-router-dom';

export default function SignIn() {
  // input variables
  const [userId,setUserId]=useState('');
  const [password,setPassword]=useState('');

  // form submit handler
  function submitHandler(e){
    e.preventDefault();
  }

    return (
      <div className="container">
        <div className="sign-in-container">
          <div className="login-div1">
            <div className="login-div1-container">
              <header>
                <nav className="logo-container">
                  <Link to="/">
                      <Logo />
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
                    Best rooms in Madikeri at affordable price. <br />
                    Contact KK Resort.
                  </p>
                </div>
              </aside>
            </div>
          </div>
          <main className="login-div2">
            <div className="login-form-container">
              <form onSubmit={submitHandler} autoComplete='off'>
                <div className="login-entries-div">
                  <label className="login-entries-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                  <div role="dialog">
                    <p className="login-error">Errror Message</p>
                  </div>
                </div>
                <div className="login-entries-div">
                  <label className="login-entries-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div role="dialog">
                    <p className="login-error">Errror Message</p>
                  </div>
                </div>
                <div className="login-create-btn-div">
                  <button type="submit">Sign in</button>
                </div>
              </form>
              <nav className="signin-actions-section">
                <Link to="/forgot-password" className="existing-user-link">
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
