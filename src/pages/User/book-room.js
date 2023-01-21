import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function BookRoom() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h3>Select date</h3>
          <p>Dates in green color are the available dates</p>
          <DatePicker
            inline
            disabledKeyboardNavigation
            readOnly
            minDate={new Date()}
            highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
          />
          <form>
            <label htmlFor="from">From</label>
            <input type="text" id="from" name="from" />
            <label htmlFor="to">To</label>
            <input type="text" id="to" name="to" />
            <p>
              <span>Note:</span>
              <span>
                We’ll call or text you to confirm your number. Standard message
                and data rates apply
              </span>
            </p>
            <button type="submit">Book now</button>
          </form>
        </section>
        <div>
          <figure>
            {/* image */}
            <figcaption>
              <span>Luxury Plus</span>
              <span>★ 4.9 (254)</span>
            </figcaption>
          </figure>
          <hr />
          <p>
            <span>From</span>
            <time dateTime="2022-10-22">22-Oct-2022</time>
          </p>
          <p>
            <span>To</span>
            <time dateTime="2022-10-24">24-Oct-2022</time>
          </p>
          <hr />
          <p>
            <span>Total</span>
            <span>Rs.1500</span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
