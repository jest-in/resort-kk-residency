import React from 'react'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function Reviews() {
  return (
    <>
      <section>
        <h2>Reviews</h2>
        <button>{/* upload svg */}</button>
        <article>
          <header>
            <figure>{/* image of reviewer */}</figure>
            <h3>Tulsi</h3>
            <time dateTime="2022-08">August 2022</time>
          </header>
          <p>★ 4.9</p>
          <p>
            This is one of the best properties I have ever stayed, and what
            makes it special is their hospitality. Guest relation at its best
            and special mention to Ambili the care taker.
          </p>
        </article>
        <article>
          <header>
            <figure>{/* image of reviewer */}</figure>
            <h3>Tulsi</h3>
            <time dateTime="2022-08">August 2022</time>
          </header>
          <p>★ 4.9</p>
          <p>
            This is one of the best properties I have ever stayed, and what
            makes it special is their hospitality. Guest relation at its best
            and special mention to Ambili the care taker.
          </p>
        </article>
        <aside>
            <DatePicker
            inline
            disabledKeyboardNavigation
            readOnly
            minDate={new Date()}
            highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            />

            <h2>Filters</h2>
            <label htmlFor="Lux">Lux</label>
            <input id="Lux" name="luxury" type="checkbox" />
            <button>Apply</button>
        </aside>
      </section>
    </>
  );
}
