import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Projects from "./Screens/Projects";

const App = () => {
  const { innerWidth, innerHeight } = window;
  return (
    <div style={{ backgroundColor: "#63cac0" }}>
      <Navbar />
      <div
        style={
          innerWidth < 600 ? { paddingTop: "9rem" } : { paddingTop: "6rem" }
        }
      ></div>
      <div
        style={
          innerWidth < 600
            ? {
                minHeight: `${innerHeight - 220}px`,
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {
                minHeight: `${innerHeight - 175}px`,
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
