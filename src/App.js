import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Game } from "./pages/game";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Profile } from "./pages/profile";
import { FAQs } from "./pages/FAQs";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";
import { About} from "./pages/About"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  return (
    <Router>
      <Navbar loggedIn={loggedIn} style={{ zIndex: 1000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/game" element={<Game />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <Profile
              setProfile={setProfile}
              username={profile.username}
              email={profile.email}
            />
          }
        />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/getintouch" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
