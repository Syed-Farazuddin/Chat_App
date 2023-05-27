import React from "react";

const MyMsg = () => {
  var mydetails = { name: "You", message: "sample message" };
  return (
    <div className="myMsg_container">
      <div className="messageBox">
        <p className="mymsg_title">{mydetails.name}</p>
        <p className="mymsg_lastMessage">{mydetails.message}</p>
        <p className="mymsg_time">12:00pm</p>
      </div>
    </div>
  );
};

export default MyMsg;
