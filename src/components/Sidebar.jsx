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
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);
  const lightThemeHandler = () => {
    props.setLightTheme(true);
    props.setDarkTheme(false);
    setDark(false);
    setLight(true);

    // console.log(`light theme on`);
  };
  const darkThemeHandler = () => {
    props.setDarkTheme(true);
    props.setLightTheme(false);
    setDark(true);
    setLight(false);

    // console.log(`dark mode on dark : true`);
  };

  const navigate = useNavigate();
  const [peoples] = useState([
    { name: "Varun", lastMessage: "Good bye", timeStamp: "9:24PM" },
    { name: "Abhishek", lastMessage: "Take Care", timeStamp: "9:24PM" },
    { name: "Sohail", lastMessage: "See you tomorrow", timeStamp: "9:24PM" },
  ]);
  const lightTheme = useSelector((state) => state.themeKey);
  // const [theme, ] = useState(lightTheme);

  const dispatch = useDispatch();
  return (
    <div className="sidebar_container">
      <div
        className={"sidebar_header "}
        // id="sidebar_header"
        style={{ backgroundColor: props.activeBg, color: props.fontColor }}
      >
        <div>
          <IconButton>
            <AccountCircleIcon
              className={"icon "}
              style={{
                backgroundColor: props.activeBg,
                color: props.fontColor,
              }}
            />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddIcon
              className={"icon "}
              style={{
                backgroundColor: props.activeBg,
                color: props.fontColor,
              }}
            />
          </IconButton>
          <IconButton>
            <AddCircleIcon
              className={"icon "}
              style={{
                backgroundColor: props.activeBg,
                color: props.fontColor,
              }}
            />
          </IconButton>
          {/* {lightTheme ? (
            <IconButton>
              <LightModeIcon
                className={"icon " + (lightTheme === true ? "dark_theme" : "")}
                onClick={() => {
                  // dispatch(toggleTheme());
                  darkThemeHandler();
                  console.log(`dark mode on`);
                }}
              />
            </IconButton>
          ) : (
            <IconButton>
              <NightlightRoundIcon
                className={"icon " + (lightTheme === true ? "dark_theme" : "")}
                onClick={() => {
                  dispatch(toggleTheme);
                  console.log(`dark mode off`);
                }}
              />
            </IconButton>
          )} */}
          <IconButton>
            <NightlightRoundIcon
              className={"icon "}
              onClick={darkThemeHandler}
              style={{
                display: light
                  ? "inline-block"
                  : dark
                  ? "none"
                  : "inline-block",
              }}
            />
          </IconButton>
          <IconButton>
            <LightModeIcon
              className={"icon "}
              onClick={lightThemeHandler}
              style={{
                display: dark
                  ? "inline-block"
                  : light
                  ? "none"
                  : "inline-block",
              }}
            />
          </IconButton>
        </div>
      </div>
      <div
        className={"sidebar_search "}
        style={{ backgroundColor: props.activeBg, color: props.fontColor }}
      >
        <IconButton>
          <SearchIcon
            className={"icon "}
            style={{ backgroundColor: props.activeBg, color: props.fontColor }}
          />
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
        className={"sidebar_conversations "}
        style={{ backgroundColor: props.activeBg, color: props.fontColor }}
      >
        {peoples.map((chatItems) => {
          return (
            <div
              // className="conversation_container"
              className={"conversation_container "}
              style={{
                backgroundColor: props.activeBg,
                color: props.fontColor,
              }}
              onClick={() => navigate("chat")}
            >
              <p
                className="conversation_icon"
                style={{
                  backgroundColor: props.activeBg,
                  color: props.fontColor,
                }}
              >
                {chatItems.name[0]}
              </p>
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
