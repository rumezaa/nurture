import React from "react";
import MessageBg from "./images/MessageBg.svg";
import SendIcon from "./images/Send_icon.svg";
import MicIcon from "./images/Mic_Icon.svg";

function MessagesScreen() {
  const MessagingComponent = () => {
    return (
      <div className="flex items-center w-5/6 justify-between bg-t-purple rounded-full pl-1 pr-2">
        <div className="bg-accent-purple rounded-full flex justify-center items-center w-8 h-8">
          <div
            style={{ backgroundImage: `url(${MicIcon})` }}
            className="w-5 h-5 bg-no-repeat bg-cover"
          />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 text-gray-800  bg-t-purple focus:outline-none"
        />

        <div className="bg-gray rounded-full flex justify-center w-12">
          <div
            style={{ backgroundImage: `url(${SendIcon})` }}
            className="w-8 h-8 bg-no-repeat bg-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${MessageBg})` }}
      className="w-screen h-screen bg-no-repeat bg-cover"
    >
      <MessagingComponent />
    </div>
  );
}

export default MessagesScreen;
