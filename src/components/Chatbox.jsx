import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import OthersMsg from "./OthersMsg";
import MyMsg from "./MyMsg";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Chatbox = (props) => {
  const lightTheme = useSelector((state) => state.themeKey);
  const [theme, setTheme] = useState(lightTheme);
  console.log("From chatbox theme is : " + theme);
  return (
    <div className="app">
      <Sidebar />
      <div
        className={
          "chatbox_container " + (theme === "light" ? "dark_theme" : "")
        }
      >
        <div
          className="header_container "
          onClick={() => {
            console.log("from chat box theme is :" + theme);
          }}
        >
          <p className="conversation_icon">T</p>
          <div className="header_text">
            <p className="conversation_title">Name</p>
            <p className="conversation_time">Time</p>
          </div>
          <div className="header_icon">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div className="message_container">
          <OthersMsg />
          <MyMsg />
          <OthersMsg />
          <MyMsg />
          <OthersMsg />
          <MyMsg />
        </div>

        <div className="inputArea sidebar_search">
          <div>
            <input type="text" placeholder="Enter your message here" />
          </div>
          <div>
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
