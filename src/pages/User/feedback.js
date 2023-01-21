import React from "react";
import Header from "../../components/header";
import StarRating from "../../components/star-rating";

export default function Feedback() {
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
          <form>
            <label>
              Overall rating
              <StarRating />
            </label>
            <textarea
              name="feedback"
              id="feedback"
              cols="30"
              rows="10"
              placeholder="Write your feedback here..."
              required
            ></textarea>
            <button type="submit">Post my experience</button>
          </form>
        </section>
      </main>
    </>
  );
}
