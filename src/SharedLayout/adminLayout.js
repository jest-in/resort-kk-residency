import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../components/header'
import Dashboard from '../Assets/Icons/Dashboard'
import Bookings from "../Assets/Icons/Bookings";
import RatesAndInventory from '../Assets/Icons/RatesAndInventory'
import Payments from '../Assets/Icons/Payments'
import Reviews from '../Assets/Icons/Reviews'
import SignOut from '../Assets/Icons/SignOut'

export default function AdminLayout() {
  return (
    <>
      <Header />
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin">
                <span aria-hidden="true">
                  <Dashboard />
                </span>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/bookings">
                <span aria-hidden="true">
                  <Bookings />
                </span>
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/rates-and-inventory">
                <span aria-hidden="true"><RatesAndInventory/></span>
                Rates and Inventory
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/payments">
                <span aria-hidden="true"><Payments/></span>
                Payments
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/reviews">
                <span aria-hidden="true"><Reviews/></span>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        <button>
          <span aria-hidden="true"><SignOut/></span>
          Sign out
        </button>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
