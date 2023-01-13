import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <p>Enjoy your dream vacation</p>
        <p>Book now and get the best prices</p>
        <button>Book Now</button>
        <p>
          Want to make the best out of your vacation? Then click below and join
          us for an adventurous journey.
        </p>
        <section>
          <h2>Rooms</h2>
          <a href="/all-rooms">View all rooms</a>
          <p>Give your ass the comfort it deserves</p>
          <article>
            <figure>{/* place the img tag here */}</figure>
            <h3>Deluxe</h3>
            <p>2 Bed | Att. Bathroom | 4 guests</p>
          </article>
          <article>
            <figure>{/* place the img tag here */}</figure>
            <h3>Semi Deluxe</h3>
            <p>2 Bed | Att. Bathroom | 4 guests</p>
          </article>
          <article>
            <figure>{/* place the img tag here */}</figure>
            <h3>Luxury</h3>
            <p>2 Bed | Att. Bathroom | 4 guests</p>
          </article>
          <article>
            <figure>{/* place the img tag here */}</figure>
            <h3>Semi Lux</h3>
            <p>2 Bed | Att. Bathroom | 4 guests</p>
          </article>
        </section>

        <section>
          <h2>Adventures</h2>
          <p>
            Wanna make your vacation fun and adventurous ? We know exactly how
            to make it.
          </p>
          <figure>
            <figcaption>Get Closer to Nature</figcaption>
            {/* place the images here */}
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex.
          </p>
          <a href="#">Explore now</a>
        </section>

        <hr />

        <section>
          <figure>{/* place the img tag here */}</figure>
          <h2>Who are we</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </section>

        <hr />

        <section>
          <h2>Get in Touch</h2>
          <p>Let’s make your vacation the most memorable one</p>
          <form>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input name="email" type="text" id="email" />
            <label htmlFor="message">Message</label>
            <input name="message" type="text" id="message" />
            <button type="submit">Send</button>
          </form>
          <section>
            <h3>Info</h3>
            <ul>
              <li>
                <a href="mailto:info@kkresidency.com">
                  <span aria-hidden="true">{/* place svg here */}</span>
                  Info@kkresidency.com
                </a>
              </li>
              <li>
                <a href="tel:+918566612854">
                  <span aria-hidden="true">{/* place svg here */}</span>
                  +91 85666 12854
                </a>
              </li>
              <li>
                <span aria-hidden="true">{/* place svg here */}</span>
                <address>
                  KK Residency Jalenahalli Street, 5th Cross Coorg, Kodagu
                </address>
              </li>
            </ul>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
