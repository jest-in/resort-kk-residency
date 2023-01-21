import React from 'react'
import Header from '../../components/header'

export default function Cancel() {
  return (
    <>
      <Header />
      <main>
        <section>
          <figure>
            {/* image */}
            <figcaption>Semi Luxury</figcaption>
          </figure>
          <button>{/* close svg */}</button>
          <hr />
          <h2>We are sorry to see you cancel your plans</h2>
          <form>
            <textarea
              name="reason"
              id="reason"
              cols="30"
              rows="10"
              placeholder="Can you tell us the reason for the cancellation?"
              required
            ></textarea>
            <button type="submit">Cancel my booking</button>
          </form>
        </section>
      </main>
    </>
  );
}
