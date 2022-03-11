import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { TetrisGame } from "./pages/tetrisGame";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [game, setGame] = useState(false);

  return (
    <Router>
      <Navbar
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        setProfile={setProfile}
        style={{ zIndex: 1000 }}
      />
      <Routes>
        <Route path="/" element={<Home setGame={setGame}/>} />
        <Route path="/game" element={<TetrisGame setGame={setGame} />} />
        <Route
          path="/games"
          element={<Projects setGame={setGame}/>}
        />
        <Route path="/about" element={<About setGame={setGame}/>} />
        <Route
          path="/login"
          element={<Login setProfile={setProfile} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <Profile
              firstName={profile.firstName}
              lastName={profile.lastName}
              username={profile.username}
              email={profile.email}
              setGame={setGame}
            />
          }
        />
        <Route path="/getintouch" element={<Contact setGame={setGame}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!game && <Footer />}
    </Router>
  );
}

export default App;
