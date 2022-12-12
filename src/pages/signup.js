import React from 'react'

export default function SignUp() {
  return (
    <>
        
        <header>
            <nav>
                <a href="/">
                    <figure>
                        {/* <!-- place the logo here --> */}
                        <figcaption>
                            {/* <!-- place the caption of the image here --> */}
                        </figcaption>
                    </figure>
                </a>
            </nav>
        </header>

        <main>

            <aside>
                <h3>Start your journey with us</h3>
                <figure>
                    {/* <!-- place the image here --> */}
                </figure>
                <p>Best rooms in Madikeri at affordable price. <br/>Contact KK Resort.</p>
            </aside>

            <form action="#">
                <p>
                    <label for="name">Name</label><br/>
                    <input id="name" name="name" type="text" placeholder="enter password here" required />
                </p>
                <p>
                    <label for="email">Email</label><br/>
                    <input id="email" name="email" type="email" placeholder="enter email here" required />
                </p>
                <p>
                    <label for="phone">Phone Number</label><br/>
                    <input id="phone" name="phone" type="tel" placeholder="enter password here" required />
                </p>
                <p>
                    <label for="password">password</label><br/>
                    <input id="password" name="password" type="password" placeholder="enter password here" required />
                </p>
                <button type="submit">Create account</button>
            </form>

        </main>

        <footer>
            <div>
                <p>
                    &copy; <time datetime="2022">2022</time>
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
                            {/* <!-- place the facebook image here of the footer here --> */}
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="#">
                        instagram
                        <figure>
                            {/* <!-- place the instagram image here of the footer here --> */}
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="#">
                        youtube
                        <figure>
                            {/* <!-- place the youtube image here of the footer here --> */}
                        </figure>
                    </a>
                </li>
            </ul>
        </footer>   

    </>
  )
}
