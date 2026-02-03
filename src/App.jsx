import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen flex items-center justify-center md:px-4 px-0">
      <div className="app-frame h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
