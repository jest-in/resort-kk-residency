import React from 'react'
import Header from '../../components/header';
import StarRating from '../../components/star-rating'

export default function Dashboard() {
  return (
    <>
      <Header/>
      <main>
        <section>
          <h2>Active orders</h2>
          <article>
            <figure>{/* image */}</figure>
            <h3>Luxury Plus</h3>
            <ul>
              <li>2 Bed</li>
              <li>2 Guests</li>
              <li>Bath Attached</li>
            </ul>
            <StarRating />
            <button>Cancel</button>
          </article>
        </section>
        <section>
          <h2>Previous orders</h2>
          <article>
            <figure>{/* image */}</figure>
            <h3>Semi Luxury</h3>
            <ul>
              <li>2 Bed</li>
              <li>2 Guests</li>
              <li>Bath Attached</li>
            </ul>
            <StarRating />
            <button>Cancel</button>
          </article>
          <article>
            <figure>{/* image */}</figure>
            <h3>Semi Luxury</h3>
            <ul>
              <li>2 Bed</li>
              <li>2 Guests</li>
              <li>Bath Attached</li>
            </ul>
            <StarRating />
            <button>Cancel</button>
          </article>
        </section>
      </main>
    </>
  );
}
