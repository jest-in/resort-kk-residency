import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

export default function SignUp() {
  return (
    <>
        
        <Header/>

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

        <Footer/>  

    </>
  )
}
