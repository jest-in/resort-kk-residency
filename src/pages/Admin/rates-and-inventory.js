import React,{forwardRef} from 'react'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function RatesAndInventory() {

  // custom button for calendar
  const CalendarIcon = forwardRef(({ onClick }) => (
    <button className="calendar-icon" onClick={onClick}>
      Calendar
    </button>
  ));

  return (
    <>
      <h2>Rooms &amp; Rates</h2>
      <button>Update</button>

      <DatePicker
        customInput={<CalendarIcon/>}
        disabledKeyboardNavigation
        minDate={new Date()}
        highlightDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      />
      
      <hr />
      <button>
        {/* upload svg */}
      </button>
      <table>
        <thead>
          <tr>
            <td>room</td>
            <th scope='col'>Sun 01 Nov</th>
            <th scope='col'>Mon 02 Nov</th>
            <th scope='col'>Tue 03 Nov</th>
            <th scope='col'>Wed 04 Nov</th>
            <th scope='col'>Thu 05 Nov</th>
            <th scope='col'>Fri 06 Nov</th>
            <th scope='col'>Sat 07 Nov</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Delux <br />
              Available rooms
            </th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <th scope="row">Ext.Child (0-6) years</th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <th scope="row">Ext.Child (7-12) years</th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <th scope="row">Ext.Child (13-15) years</th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
        </tbody>

        <br />

        <tbody>
          <tr>
            <th scope="row">
              Semi Delux <br />
              Available rooms
            </th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <th scope="row">Ext.Child (0-6) years</th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <th scope="row">Ext.Child (7-12) years</th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <th scope="row">Ext.Child (13-15) years</th>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
