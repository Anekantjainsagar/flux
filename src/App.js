import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Events from "./Screens/Events";

const App = () => {
  const { innerWidth, innerHeight } = window;
  return (
    <div style={{ backgroundColor: "#6ad1c7" }}>
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
                margin: "auto",
                height: `${innerHeight - 228}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }
            : {
                margin: "auto",
                height: `${innerHeight - 175}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }
        }
      >
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default App;
