import React, {useEffect, useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import cat1 from '../../Assets/Images/Room Category 1.jpg';

export default function BookRoom() {
  // variable for tracking the focus of inputs from and to, initialized as from
  const [fromOrTo, setFromOrTo] = useState("from");

  // variable for from and to inputs
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // useEffect for fromDate
  useEffect(() => {
    if (fromDate > toDate) setToDate(null);
    if (!fromDate && fromOrTo === "to") setFromDate(new Date());
  }, [fromDate]);

  // variable for selected day on calendar
  const [selectedDate, setSelectedDate] = useState(null);
  // variable for minimum date selectable in calendar
  const [minimumDate, setMinimumDate] = useState(new Date());

  // calendar input handler
  function calendarHandler(date) {
    setSelectedDate(date);
    if (fromOrTo === "from") setFromDate(date);
    else setToDate(date);
  }
  // function for handling book now button
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <Header />
      <main className="bookroom-container">
        <section className="bookroom-entries-container">
          <div className="singleroom-calender-details">
            <h2>Select date</h2>
            <p className="bookroom-selectdate-note">
              Dates in green color are the available dates
            </p>
          </div>{" "}
          <form onSubmit={(e)=>submitHandler(e)}>
            <DatePicker
              selected={selectedDate}
              inline
              onChange={(date) => calendarHandler(date)}
              disabledKeyboardNavigation
              minDate={minimumDate}
              highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            />
            <div className="bookroom-dateselect-container">
              <div className="bookroom-fromcontainer">
                <label className="bookroom-form-label" htmlFor="from">
                  From
                </label>
                <input
                  defaultValue={fromDate ? fromDate.toLocaleDateString() : null}
                  onClick={(e) => {
                    setSelectedDate(e.target.defaultValue);
                    setMinimumDate(new Date());
                    setFromOrTo("from");
                  }}
                  className="bookroom-form-input"
                  type="text"
                  id="from"
                  name="from"
                />
              </div>
              <div className="bookroom-tocontainer">
                <label className="bookroom-form-label" htmlFor="to">
                  To
                </label>
                <input
                  onClick={() => {
                    setSelectedDate(null);
                    setMinimumDate(fromDate);
                    setFromOrTo("to");
                  }}
                  defaultValue={toDate ? toDate.toLocaleDateString() : null}
                  className="bookroom-form-input"
                  type="text"
                  id="to"
                  name="to"
                />
              </div>
            </div>
            <p className="bookroom-note-div">
              <span className="bookroom-note-label">Note:</span>
              <span className="bookroom-note-desc">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply
              </span>
            </p>
            <button className="book-now-btn bookroom-booknow-btn" type="submit">
              Book now
            </button>
          </form>
        </section>
        <div className="bookroom-checkout-container">
          <div className="bookroom-checkout-borderdiv">
            <figure className="bookroom-checkout-img-div">
              <img
                className="bookroom-img-cat"
                src={cat1}
                alt="room category"
              />
              <figcaption className="room-rating bookroom-rating">
                <p className="room-rating">
                  <span>Luxuary Plus</span>
                  <span className="rating-star">★</span>{" "}
                  <span className="rating-point">4.9</span>{" "}
                  <span className="rating-user-count">(254)</span>
                </p>
              </figcaption>
            </figure>
            <hr className="whatitoffers-hr" />
            <p className="bookroom-checkout-time-from">
              <span className="bookroom-form-label booknow-checkout-from-label">
                From
              </span>
              <time className="bookroom-checkout-time" dateTime="2022-10-22">
                22-Oct-2022
              </time>
            </p>
            <p className="bookroom-checkout-time-from">
              <span className="bookroom-form-label booknow-checkout-from-label">
                To
              </span>
              <time className="bookroom-checkout-time" dateTime="2022-10-24">
                24-Oct-2022
              </time>
            </p>
            <hr className="whatitoffers-hr bookroom-checkout-hr" />
            <p className="bookroom-checkout-amt-div">
              <span>Total</span>
              <span className="bookroom-checkout-price">Rs.1500</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
