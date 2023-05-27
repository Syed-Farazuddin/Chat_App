import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [peoples] = useState([
    { name: "Varun", lastMessage: "Good bye", timeStamp: "9:24PM" },
    { name: "Abhishek", lastMessage: "Take Care", timeStamp: "9:24PM" },
    { name: "Sohail", lastMessage: "See you tomorrow", timeStamp: "9:24PM" },
  ]);
  const lightTheme = useSelector((state) => state.themeKey);
  // const [theme, ] = useState(lightTheme);
  console.log("THe console is busy " + lightTheme);
  const dispatch = useDispatch();
  return (
    <div className="sidebar_container">
      <div
        className={"sidebar_header " + (lightTheme ? "dark_theme" : "")}
        // id="sidebar_header"
      >
        <div>
          <IconButton>
            <AccountCircleIcon
              className={"icon " + (lightTheme ? "dark_theme" : "")}
            />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddIcon
              className={"icon " + (lightTheme ? "dark_theme" : "")}
            />
          </IconButton>
          <IconButton>
            <AddCircleIcon
              className={"icon " + (lightTheme ? "dark_theme" : "")}
            />
          </IconButton>
          {lightTheme ? (
            <IconButton>
              <LightModeIcon
                className={"icon " + (lightTheme === true ? "dark_theme" : "")}
                onClick={() => {
                  dispatch(toggleTheme());
                }}
              />
            </IconButton>
          ) : (
            <IconButton>
              <NightlightRoundIcon
                className={"icon " + (lightTheme === true ? "dark_theme" : "")}
                onClick={() => {
                  dispatch(toggleTheme);
                }}
              />
            </IconButton>
          )}
        </div>
      </div>
      <div className={"sidebar_search " + (lightTheme ? "dark_theme" : "")}>
        <IconButton>
          <SearchIcon className={"icon " + (lightTheme ? "dark_theme" : "")} />
        </IconButton>
        <input
          type="text"
          placeholder="Search"
          style={{
            backgroundColor: lightTheme ? "#2d3941" : "#fff",
            color: lightTheme ? "#fff" : "#000",
          }}
          // className={theme  ? "" : "dark_theme"}
        />
      </div>
      <div
        className={"sidebar_conversations " + (lightTheme ? "dark_theme" : "")}
      >
        {peoples.map((chatItems) => {
          return (
            <div
              // className="conversation_container"
              className={
                "conversation_container " + (lightTheme ? "dark_theme" : "")
              }
              onClick={() => navigate("chat")}
            >
              <p className="conversation_icon">{chatItems.name[0]}</p>
              <p className="conversation_title">{chatItems.name}</p>
              <p className="conversation_message">{chatItems.lastMessage}</p>
              <p className="conversation_time">{chatItems.timeStamp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
