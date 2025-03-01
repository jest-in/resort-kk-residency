import React,{useState} from 'react';
import Footer from '../components/footer';
import Logo from '../Assets/Logo/KKGroupLogoWhite';
import image from '../Assets/Images/Login Image.jpg';
import { Link } from 'react-router-dom';

export default function SignUp() {
  // input variables
  const { name, setName } = useState(null);
  const { phoneNumber, setPhoneNumber } = useState(null);
  const { email, setEmail } = useState(null);
  const { password, setPassword } = useState(null);

  // form submit handler
  function submitHandler() {}

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
                  Best rooms in Madikeri at affordable price. <br />
                  Contact KK Resort.
                </p>
              </div>
            </aside>
          </div>
        </div>
        <main className="login-div2">
          <div className="login-form-container">
            <form onSubmit={()=>submitHandler()} autoComplete="off">
              <p className="login-entries-div">
                <label className="login-entries-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div>
                  <p className="login-error">Errror Message</p>
                </div>
              </p>
              <p className="login-entries-div">
                <label className="login-entries-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div>
                  <p className="login-error">Errror Message</p>
                </div>
              </p>
              <p className="login-entries-div">
                <label className="login-entries-label" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder=""
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <div>
                  <p className="login-error">Errror Message</p>
                </div>
              </p>
              <p className="login-entries-div">
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
                <div>
                  <p className="login-error">Errror Message</p>
                </div>
              </p>
              <div className="login-create-btn-div">
                <button type="submit">Create account</button>
              </div>
            </form>
            <nav className="signin-actions-section">
              <Link to="/login" className="existing-user-link">
                Already have an account ?
              </Link>
            </nav>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
