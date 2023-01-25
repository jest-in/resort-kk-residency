import React, {useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function BookRoom() {

  // variable for tracking the focus of inputs from and to, initialized as from 
  const [fromOrTo,setFromOrTo]=useState('from');

  // variable for from and to inputs
  const [fromDate,setFromDate]=useState(null);
  const [toDate,setToDate]=useState(null);

  // useEffect for fromDate
  useEffect(()=>{
    if(fromDate>toDate)
    setToDate(null);
    if (!fromDate&&fromOrTo==='to') setFromDate(new Date());
  },[fromDate])

  // variable for selected day on calendar
  const [selectedDate,setSelectedDate]=useState(null)
  // variable for minimum date selectable in calendar
  const [minimumDate,setMinimumDate]=useState(new Date())

  // calendar input handler
  function calendarHandler(date){
    setSelectedDate(date)
    if(fromOrTo==='from')
    setFromDate(date);
    else setToDate(date);
  }
  // function for handling book now button
  function submitHandler(e){
    e.preventDefault();
  }
  return (
    <>
      <Header />
      <main>
        <section>
          <h3>Select date</h3>
          <p>Dates in green color are the available dates</p>
          <form onSubmit={(e)=>submitHandler(e)}>
            <DatePicker
              selected={selectedDate}
              inline
              onChange={(date) => calendarHandler(date)}
              disabledKeyboardNavigation
              minDate={minimumDate}
              highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            />
            <label htmlFor="from">From</label>
            <input
              defaultValue={fromDate?fromDate.toLocaleDateString():null}
              onClick={() => {
                setMinimumDate(new Date())
                setFromOrTo("from");
              }}
              type="text"
              id="from"
              name="from"
            />
            <label htmlFor="to">To</label>
            <input
              type="text"
              onClick={() => {
                setMinimumDate(fromDate)
                
                setFromOrTo("to");
              }}
              defaultValue={toDate ? toDate.toLocaleDateString() : null}
              id="to"
              name="to"
            />
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
