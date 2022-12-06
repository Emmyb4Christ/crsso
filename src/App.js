import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./Components/Context/AuthContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogIn";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Dashboard/Profile";
import Result from "./Dashboard/Result";

function App() {
  const [user, setUser] = React.useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Routes>
            {!user ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Service />} />{" "}
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/log-in" element={<LogIn />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/result" element={<Result />} />
              </>
            )}
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
