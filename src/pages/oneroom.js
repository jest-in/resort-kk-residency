import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function OneRoom() {
  return (
    <>
      <header>
        <h1 style={{ display: "none" }}>Luxury plus room</h1>
        <p>KK Residency</p>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <a href="/index.html">Sign in</a>
        </nav>
      </header>
      <main>
        <p>Luxury Plus</p>
        <p>★ 4.9 (254)</p>
        <div>
          <figure>{/* place the main image here */}</figure>
          <figure>{/* palce other small images here */}</figure>
        </div>
        <ul>
          <li>4 guests</li>
          <li>2 Bed</li>
          <li>2 Bedroom</li>
          <li>1 Bathroom</li>
        </ul>
        <div>
          <p>
            <span>Rs. 500</span>
            <br />
            per day
          </p>
          <p>★ 4.9 (254)</p>
          <button>Book now</button>
        </div>
        <hr />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            doloremque quam. Laudantium quidem a aspernatur illum explicabo
            quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            doloremque quam. Laudantium quidem a aspernatur illum explicabo
            quod.
          </p>
        </div>
        <hr />
        <section>
          <h2>Available dates</h2>
          <p>Dates in green color are the available dates</p>
          <div>
            {/* section for calendar */}
            {/* css help
            for previous month and next month dates .react-datepicker__day--outside-month{
              visibility: hidden
            }
            .react-datepicker__day--highlighted{
              change properties here
            }
            .react-datepicker__day
               */}
            <DatePicker
              inline
              disabledKeyboardNavigation
              readOnly
              minDate={new Date()}
              highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            />
          </div>
        </section>
        <hr />
        <section>
          <h2>What this place offers</h2>
          <ul>
            <div>
              <li>Garden View</li>
              <li>Dedicated Workspace</li>
              <li>Free parking on premises</li>
            </div>
            <div>
              <li>Patio or Balcony</li>
              <li>Garden</li>
              <li>Luggage drop-off allowed</li>
            </div>
          </ul>
        </section>
        <hr />
        <section>
          <h2>Reviews</h2>
          <p>★ 4.9 (254)</p>
          <article>
            <header>
              <figure>{/* image of reviewer */}</figure>
              <h3>Tulsi</h3>
              <time dateTime="2022-08">August 2022</time>
            </header>
            <p>
              This is one of the best properties I have ever stayed, and what
              makes it special is their hospitality. Guest relation at its best
              and special mention to Ambili the care taker.
            </p>
          </article>
          <article>
            <header>
              <figure>{/* image of reviewer */}</figure>
              <h3>Sanket</h3>
              <time dateTime="2022-08">August 2022</time>
            </header>
            <p>
              Fantastic time at the property - Scenic views, great staff and
              amazing food. Highly recommend staying here!
            </p>
          </article>
          <button>
            Show all reviews
            {/* place the icon here */}
          </button>
        </section>
        <hr />
        <section>
          <h2>Where you’ll be</h2>
          <div>{/* For map */}</div>
        </section>
        <hr />
        <section>
          <h2>Things to know</h2>
          <section>
            <h3>House rules</h3>
            <ul>
              <li>
                Check-in: <time dateTime="12:00">12:00 pm</time> -{" "}
                <time dateTime="17:00">5:00 pm</time>
              </li>
              <li>No smoking</li>
              <li>No pets</li>
              <li>No parties or events</li>
            </ul>
          </section>
          <section>
            <h3>Cancellation policy</h3>
            <p>Your money will be fully refunded if cancelled before 3 days.</p>
          </section>
        </section>
        <hr />
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
