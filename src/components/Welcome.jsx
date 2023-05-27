import React from "react";
import logo from "./images.png";
import Sidebar from "./Sidebar";

const Welcome = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="welcome_container">
        <div className="welcome_icon">
          <img src={logo} alt="logo" />
        </div>
        <div className="welcome_content">
          <h2 align="center">Chatbox</h2>
          <p>Send and Recieve messages to your chatbox people</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
