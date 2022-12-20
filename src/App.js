import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AllRooms from "./pages/allrooms";
import OneRoom from "./pages/oneroom";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="all-rooms" element={<AllRooms />} />
        <Route path="room" element={<OneRoom />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
