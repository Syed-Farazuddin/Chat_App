import React from "react";

const OthersMsg = () => {
  var othersdetails = { name: "RandomUser", message: "Other sample message" };
  return (
    <div className="othersMsg_container">
      <div className="othersMsg_container">
        <div className="conversation_icon">{othersdetails.name[0]}</div>
        <div className="othersMsg_textcontent">
          <p className="conversation_title">{othersdetails.name}</p>
          <p className="conversation_lastMessage">{othersdetails.message}</p>
          <p className="mymsg_time">12:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default OthersMsg;
