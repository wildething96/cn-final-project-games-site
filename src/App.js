import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./Pages/Home";
import { Game } from "./Pages/Game";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Profile } from "./Pages/Profile";
import { FAQs } from "./Pages/FAQs";
import { GetInTouch } from "./Pages/GetInTouch";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} style={{ zIndex: 1000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
