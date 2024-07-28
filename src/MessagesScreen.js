import React from "react";
import MessageBg from "./images/MessageBg.svg";

function MessagesScreen() {
  const MessagingComponent = () => {
    return (
      <div className="flex items-center justify-between p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-t-purple text-gray-800  rounded-full focus:outline-none"
        />
        <button className="ml-4 px-4 py-2 text-black bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send
        </button>
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
