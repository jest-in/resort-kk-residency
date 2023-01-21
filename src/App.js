import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AllRooms from "./pages/allrooms";
import OneRoom from "./pages/oneroom";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";
import AdminLayout from "./SharedLayout/adminLayout";
import Dashboard from "./pages/Admin/dashboard";
import Bookings from "./pages/Admin/bookings";
import RatesAndInventory from "./pages/Admin/rates-and-inventory";
import Payments from "./pages/Admin/payments";
import Reviews from "./pages/Admin/reviews";
import BookRoom from "./pages/User/book-room";
import UserDashboard from "./pages/User/dashboard";
import Cancel from "./pages/User/cancel";
import Feedback from "./pages/User/feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="all-rooms" element={<AllRooms />} />
        {/* <Route path="all-rooms" >
          <Route index  element={<AllRooms />}/>
          <Route path=":room-name"  element={<OneRoom />}/>
        </Route> */}
        <Route path="room" element={<OneRoom />} />
        <Route path="book-room" element={<BookRoom />} />
        <Route path="user-dashboard" element={<UserDashboard />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="feedback" element={<Feedback />} />

        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="bookings" element={<Bookings/>}/>
          <Route path="rates-and-inventory" element={<RatesAndInventory/>}/>
          <Route path="payments" element={<Payments/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
