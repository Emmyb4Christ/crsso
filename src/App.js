import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./Components/Context/AuthContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Admission from "./Pages/Admission";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogIn";

function App() {
  const [user, setUser] = React.useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Routes>
            {!user && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/log-in" element={<LogIn />} />
              </>
            )}
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
