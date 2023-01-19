import React from 'react'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function Bookings() {
  return (
    <>
      <h2>Booking Details</h2>
      <input type="text" placeholder="Search" />
      <button>{/* search svg */}</button>
      <hr />
      <button>{/* upload svg */}</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Stay</th>
            <th scope="col">Room</th>
            <th scope="col">Booking Id</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>6 Apr - 7 Apr</td>
            <td>1x Sem.De</td>
            <td>HNTPK1234567891</td>
            <td>1352</td>
          </tr>
          <tr>
            <td>Rahul</td>
            <td>6 Apr - 7 Apr</td>
            <td>1x Sem.De</td>
            <td>HNTPK1234567891</td>
            <td>1352</td>
          </tr>
          <tr>
            <td>Rahul</td>
            <td>6 Apr - 7 Apr</td>
            <td>1x Sem.De</td>
            <td>HNTPK1234567891</td>
            <td>1352</td>
          </tr>
          <tr>
            <td>Rahul</td>
            <td>6 Apr - 7 Apr</td>
            <td>1x Sem.De</td>
            <td>HNTPK1234567891</td>
            <td>1352</td>
          </tr>
          <tr>
            <td>Rahul</td>
            <td>6 Apr - 7 Apr</td>
            <td>1x Sem.De</td>
            <td>HNTPK1234567891</td>
            <td>1352</td>
          </tr>
        </tbody>
      </table>

      <section>
      <DatePicker
        inline
        disabledKeyboardNavigation
        readOnly
        minDate={new Date()}
        highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      />

        <h3>Filters</h3>
        <label htmlFor="Lux">Lux</label>
        <input id='Lux' name='luxury' type="checkbox" />
        <button>Apply</button>
      </section>
    </>
  );
}
