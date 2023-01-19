import React from 'react'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function Payments() {
  return (
    <>
      <section>
        <h2>Payment details</h2>
        <input type="text" placeholder="Search" />
        <span aria-hidden="true">{/* svg */}</span>
        <hr />
        <button>{/* upload svg */}</button>
        <table>
          <thead>
            <tr>
              <th scope="col">Check-in</th>
              <th scope="col">Name</th>
              <th scope="col">Booking Id</th>
              <th scope="col">Booking Status</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6 Nov 22</td>
              <td>Suresh</td>
              <td>HNTPK4309039221</td>
              <td>Confirmed</td>
              <td>1352</td>
            </tr>
            <tr>
              <td>6 Nov 22</td>
              <td>Suresh</td>
              <td>HNTPK4309039221</td>
              <td>Confirmed</td>
              <td>1352</td>
            </tr>
            <tr>
              <td>6 Nov 22</td>
              <td>Suresh</td>
              <td>HNTPK4309039221</td>
              <td>Confirmed</td>
              <td>1352</td>
            </tr>
            <tr>
              <td>6 Nov 22</td>
              <td>Suresh</td>
              <td>HNTPK4309039221</td>
              <td>Confirmed</td>
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
          <input id="Lux" name="luxury" type="checkbox" />
          <button>Apply</button>
        </section>
      </section>
    </>
  );
}
