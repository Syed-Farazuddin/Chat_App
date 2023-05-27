import React from "react";
import "./Login.css";
import logo from "./images.png";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="app">
      <div className="Login_container">
        <div className="Login-logo_container">
          <div className="welcome_icon">
            <img src={logo} alt="logo" />
          </div>

          <div className="welcome_content">
            <h2 align="center" className="login_header">
              Chatbox
            </h2>
          </div>
        </div>
        <div className="Login-box">
          <div className="heading">
            <p>Login to account here</p>
          </div>
          <TextField
            id="outline-basic"
            label="Enter your User Name"
            variant="outlined"
          />
          <br />
          <TextField
            id="outline-basic"
            label="Enter your password"
            variant="outlined"
            type="password"
          />
          <br />
          <Button variant="outlined" className="login_button">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
