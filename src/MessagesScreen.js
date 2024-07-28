import React from "react";
import MessageBg from "./images/MessageBg.svg";
import SendIcon from "./images/Send_icon.svg";
import MicIcon from "./images/Mic_Icon.svg";
import ArrowIcon from "./images/Arrow_icon.svg";
import Lilly from "./images/Lilly.png";
import CityBoyJJ from "./images/CityboyJJ.png";
import Therapist from "./images/Therapist.png";

function MessagesScreen({ reciever }) {

  //this is the thing that actually gets the text
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

  const MessagingBody = () => {
    return <div className="h-5/6"></div>;
  };

  const MessagingHeader = ({ reciever }) => {
    return (
      <div className="bg-white border-b-2 border-light-gray h-16 flex  items-center gap-2">
        <div
          style={{ backgroundImage: `url(${ArrowIcon})` }}
          className="w-8 h-8 bg-no-repeat bg-cover"
        />

        <div
          style={{
            backgroundImage: `url(${
              (reciever === "city" && CityBoyJJ) ||
              (reciever === "lilly" && Lilly) ||
              Therapist
            })`,
          }}
          className="w-10 h-10 bg-no-repeat bg-cover"
        />

        <div className="flex flex-col">
          <h3>
            {(reciever === "city" && "Jerome") ||
              (reciever === "lilly" && "Lilly") ||
              "Alexis"}
          </h3>
          <h3 className="text-sm text-gray leading-3">active</h3>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${MessageBg})` }}
      className="w-screen h-screen bg-no-repeat bg-cover"
    >
      <MessagingHeader reciever={"city"} />
      <MessagingBody />
      <MessagingComponent />
    </div>
  );
}

export default MessagesScreen;
