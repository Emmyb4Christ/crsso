import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./Components/Context/AuthContext";
import Home from "./Pages/Home";

function App() {
  const [user, setUser] = React.useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />} />
          </Routes>
        </Router>
        <Home />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
