import React from 'react';

import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/header';
import Footer from '../components/footer';

import cat1 from '../Assets/Images/single room 1.png';
import thumb1 from '../Assets/Images/Room Category 1.jpg';
import thumb2 from '../Assets/Images/Room Category 2.png';
import rev1 from '../Assets/Images/Reviewer 1.jpg';

export default function OneRoom() {
    return (
        <div className="container">
            <Header />
            <main className="singleroom-main">
                <div className="single-room-head">
                    <div className="single-room-name-rating">
                        <p className="singleroom-name">Luxury Plus</p>
                    </div>
                    <div className="room-rating">
                        <p className="room-rating">
                            <span className="rating-star">★</span>{' '}
                            <span className="rating-point">4.9</span>{' '}
                            <span className="rating-user-count">(254)</span>
                        </p>
                    </div>
                    <div className="singleroom-image-big">
                        <figure>
                            <img
                                src={cat1}
                                alt="room category"
                                className="singleroom-img"
                            />
                        </figure>
                    </div>
                    <div className="singleroom-image-thumb">
                        <figure className="singleroom-thumb-container">
                            <img
                                src={thumb1}
                                alt="room category"
                                className="singleroom-thumb1"
                            />
                            <img
                                src={thumb2}
                                alt="room category"
                                className="singleroom-thumb2"
                            />
                        </figure>
                    </div>
                </div>
                <div className="singleroom-info-div">
                    <div className="singleroom-desc-div">
                        <div className="singleroom-keyspec">
                            <ul className="singleroom-keyspec-list">
                                <li>4 guests</li>
                                <li>2 Bed</li>
                                <li>2 Bedroom</li>
                                <li>1 Bathroom</li>
                            </ul>
                            <hr />
                        </div>
                        <div className="singleroom-desc">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae. Perched atop a quaint hill, The
                                Mudhouse is surrounded by the spectacular
                                landscapes of Sahayadri, offering an epic
                                panorama of the valley of Marayoor. Close to the
                                treasured Sandalwood forest and Chinnar Wildlife
                                Sanctuary. Here, time moves unhurriedly, slowly
                                painting the sky a different hue each passing
                                hour. The eco-friendly constructed cottages and
                                treehouse reflect barefoot luxury, helping you
                                stay rooted to Earth but still be close to
                                Heaven.
                            </p>
                            <hr />
                        </div>
                        <section className="singleroom-calender-container">
                            <div className="singleroom-calender-details">
                                <h2>Available dates</h2>
                                <p>
                                    Dates in green color are the available dates
                                </p>
                            </div>
                            <div className="user-calender-div">
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
                                    highlightDates={[
                                        addDays(new Date(), 1),
                                        addDays(new Date(), 5)
                                    ]}
                                />
                            </div>
                        </section>
                        <hr className="user-calander-hr" />
                    </div>
                    <div className="singleroom-rate-div">
                        <div className="singleroom-rate-container">
                            <p className="room-price">Rs. 500</p>
                            <p className="room-price-desc">per day</p>
                            <div className="room-rating">
                                <p className="room-rating">
                                    <span className="rating-star">★</span>{' '}
                                    <span className="rating-point">4.9</span>{' '}
                                    <span className="rating-user-count">
                                        (254)
                                    </span>
                                </p>
                            </div>
                            <button className="book-now-btn singleroom-booknow-btn">
                                Book now
                            </button>
                        </div>
                    </div>
                </div>

                <section className="whatitoffers-div">
                    <h2 className="whatitoffers-heading">
                        What this place offers
                    </h2>
                    <ul className="whatitoffers-container">
                        <div>
                            <li className="whatitoffers-items">Garden View</li>
                            <li className="whatitoffers-items">
                                Dedicated Workspace
                            </li>
                            <li className="whatitoffers-items">
                                Free parking on premises
                            </li>
                        </div>
                        <div>
                            <li className="whatitoffers-items">
                                Patio or Balcony
                            </li>
                            <li className="whatitoffers-items">Garden</li>
                            <li className="whatitoffers-items">
                                Luggage drop-off allowed
                            </li>
                        </div>
                    </ul>
                </section>
                <hr className="whatitoffers-hr" />
                <section className="singleroom-reviews-div">
                    <h2 className="singleroom-reviews-heading">Reviews</h2>
                    <p className="room-rating">
                        <span className="rating-star">★</span>{' '}
                        <span className="rating-point">4.9</span>{' '}
                        <span className="rating-user-count">(254)</span>
                    </p>
                    <div className="singleroom-review-content">
                        <article className="singleroom-review-container">
                            <header className="singleroom-review-person-data">
                                <figure className="reviewer-img-container">
                                    <img
                                        src={rev1}
                                        alt="reviewer"
                                        className="singleroom-thumb1 reviewer-img"
                                    />
                                </figure>
                                <div className="reviewer-name-time-div">
                                    <h3>Tulsi</h3>
                                    <time dateTime="2022-08">August 2022</time>
                                </div>
                            </header>
                            <p className="singleroom-review-text">
                                This is one of the best properties I have ever
                                stayed, and what makes it special is their
                                hospitality. Guest relation at its best and
                                special mention to Ambili the care taker.
                            </p>
                        </article>
                        <article className="singleroom-review-container">
                            <header className="singleroom-review-person-data">
                                <figure className="reviewer-img-container">
                                    <img
                                        src={rev1}
                                        alt="reviewer"
                                        className="singleroom-thumb1 reviewer-img"
                                    />
                                </figure>
                                <div className="reviewer-name-time-div">
                                    <h3>Tulsi</h3>
                                    <time dateTime="2022-08">August 2022</time>
                                </div>
                            </header>
                            <p className="singleroom-review-text">
                                This is one of the best properties I have ever
                                stayed, and what makes it special is their
                                hospitality. Guest relation at its best and
                                special mention to Ambili the care taker.
                            </p>
                        </article>
                    </div>
                    <button className="showall-reviews-btn">
                        Show all reviews
                        {/* place the icon here */}
                    </button>
                </section>
                <hr className="whatitoffers-hr" />
                <section className="singleroom-reviews-div">
                    <h2 className="singleroom-reviews-heading">
                        Where you’ll be
                    </h2>
                    <div className="map-div">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19094.725834180557!2d75.81349960517342!3d12.187480697093228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce950f14ab6e3dad!2sKK%20GROUP%20OF%20RESIDENCY!5e0!3m2!1sen!2sin!4v1674407286500!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
                <hr className="whatitoffers-hr" />
                <section className="whatitoffers-div">
                    <h2 className="whatitoffers-heading">Things to know</h2>
                    <section>
                        <h3 className="houserules-text">House rules</h3>
                        <ul className="things-to-know-container">
                            <li className="things-toknow-items">
                                Check-in:{' '}
                                <time
                                    dateTime="12:00"
                                    className="things-toknow-items"
                                >
                                    12:00 pm
                                </time>{' '}
                                -{' '}
                                <time
                                    dateTime="17:00"
                                    className="things-toknow-items"
                                >
                                    5:00 pm
                                </time>
                            </li>
                            <li className="things-toknow-items">No smoking</li>
                            <li className="things-toknow-items">No pets</li>
                            <li className="things-toknow-items">
                                No parties or events
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Cancellation policy</h3>
                        <p>
                            Your money will be fully refunded if cancelled
                            before 3 days.
                        </p>
                    </section>
                </section>
                <hr />
            </main>

            <Footer />
        </div>
    );
}
