import React, { useState } from "react";
import logo from "./images.png";
import Sidebar from "./Sidebar";

const Welcome = (props) => {
  const [lightTheme, setLightTheme] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  let activeBg = "";
  let fontColor = "";
  if (lightTheme) {
    activeBg = "#fff";
    fontColor = "#000";
  }
  if (darkTheme) {
    activeBg = "#2d3941";
    fontColor = "#fff";
  }

  return (
    <div className="app">
      <Sidebar
        setLightTheme={setLightTheme}
        setDarkTheme={setDarkTheme}
        activeBg={activeBg}
        fontColor={fontColor}
      />
      <div
        className="welcome_container"
        style={{ backgroundColor: activeBg, color: fontColor }}
      >
        <div
          className="welcome_icon"
          style={{ backgroundColor: activeBg, color: fontColor }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ backgroundColor: activeBg, color: fontColor }}
          />
        </div>
        <div
          className="welcome_content"
          style={{ backgroundColor: activeBg, color: fontColor }}
        >
          <h2 align="center">Chatbox</h2>
          <p>Send and Recieve messages to your chatbox people</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
