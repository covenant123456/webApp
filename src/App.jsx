import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Home02 from "./pages/Home/Home02.jsx";
import Home03 from "./pages/Home/Home03.jsx";
import Home04 from "./pages/Home/Home04.jsx";
import Signup from "./pages/Home/SignUp.jsx";
import Login from "./pages./pages/Home/Login.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboard" element={<Home02 />} />
        <Route path="/onboard/1" element={<Home03 />} />
        <Route path="/onboard/2" element={<Home04 />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
