import { BrowserRouter,Routes,Route } from "react-router-dom";

// Components import
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AllRooms from "./pages/allrooms";
import OneRoom from "./pages/oneroom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<SignIn/>}/>
        <Route path="register" element={<SignUp/>}/>
        <Route path="all-rooms" element={<AllRooms/>}/>
        <Route path="room" element={<OneRoom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
