import React from 'react'



export default function SignIn() {
  return (
    <>

        <header>
            <nav>
            <a href="/">
                <figure>
                {/* place the logo here */}
                <figcaption>
                    {/* place the caption of the image here */}
                </figcaption>
                </figure>
            </a>
            </nav>
        </header>
        <main>
            <aside>
                <h3>Start your journey with us</h3>
                <figure>
                    {/* place the image here */}
                </figure>
                <p>Best rooms in Madikeri at affordable price. <br />Contact KK Resort.</p>
            </aside>
            <div>
                <form action="#">
                    <p>
                    <label htmlFor="email">Email</label><br />
                    <input id="email" name="email" type="email" placeholder="enter email here" required />
                    </p>
                    <p>
                    <label htmlFor="password">password</label><br />
                    <input id="password" name="password" type="password" placeholder="enter password here" required />
                    </p>
                    <button type="submit">Sign in</button>
                </form>
                <section>
                    <a href="#">forgot password?</a>
                    <a href="/signup.html">Dont't have an account?</a>
                </section>
            </div>
        </main>
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

    </>
  );
}
