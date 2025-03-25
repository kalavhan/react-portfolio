import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;

