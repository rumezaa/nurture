import React, { useState } from "react";
import MessageBg from "./images/MessageBg.svg";
import SendIcon from "./images/Send_icon.svg";
import MicIcon from "./images/Mic_Icon.svg";
import ArrowIcon from "./images/Arrow_icon.svg";
import Lilly from "./images/Lilly.png";
import CityBoyJJ from "./images/CityboyJJ.png";
import Therapist from "./images/Therapist.png";
import Logo from "./images/Logo.svg";
import GenButton from "./images/GenerateButton.svg";
import { useLocation, useNavigate } from "react-router-dom";

function MessageScreen() {
  const location = useLocation();
  const reciever = location.state;
  const [isTyping, setIsTyping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleInputFocus = () => {
    setIsTyping(true);
  };

  const handleInputBlur = () => {
    if (!document.activeElement.classList.contains("focus-visible")) {
      setIsTyping(false);
    }
  };

  const handleInputChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleSendMessage = () => {

    if (currentMessage.trim() === "") return;
    
    // Add the new message to the messages state
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: currentMessage }
    ]);

    // Clear the input field
    setCurrentMessage("");

    
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "gpt", text: "Please try understanding" }
      ]);
    }, 1000);
  };

  // Component for the messaging input and buttons
  const MessagingComponent = () => {
    return (
      <div className="flex items-center w-3/4 justify-between bg-t-purple rounded-full pl-1 pr-2">
        <div className="bg-accent-purple rounded-full flex justify-center items-center w-8 h-8">
          <div
            style={{ backgroundImage: `url(${MicIcon})` }}
            className="w-5 h-5 bg-no-repeat bg-cover"
          />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-2 py-2 text-gray-800 bg-t-purple focus:outline-none"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={currentMessage}
          onChange={handleInputChange}
        />
        <div
          className="bg-gray rounded-full flex justify-center w-12"
          onClick={handleSendMessage}
        >
          <div
            style={{ backgroundImage: `url(${SendIcon})` }}
            className="w-8 h-8 bg-no-repeat bg-cover cursor-pointer"
          />
        </div>
      </div>
    );
  };

  // Component for the messaging body
  const MessagingBody = () => {
    return (
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-2 rounded-lg max-w-xs mb-1 ${message.sender === "user" ? "bg-accent-purple text-white" : "bg-light-gray text-gray-800"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Modal component
  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end z-50"
      >
        <div className=" absolute bg-white rounded-lg shadow-lg w-48 relative right-16 bottom-10 z-60 p-2">
          <h3 className="text-xs mb-2" onClick={() => setRead(!read)}>
            {(read && (
              <>
                Jerome may feel unappreciated by this message. Try being more
                understanding of his feelings. Maybe think of a way that can
                help both of you get what you want?
              </>
            )) || (
              <>
                Jerome may feel unappreciated by this message...{" "}
                <b>Read More</b>
              </>
            )}
          </h3>
          <div
            style={{ backgroundImage: `url(${GenButton})` }}
            className="w-32 h-8 bg-no-repeat bg-contain"
          />
        </div>
      </div>
    );
  };

  // Component for the messaging header
  const MessagingHeader = ({ reciever }) => {
    const nav = useNavigate();

    return (
      <div className="bg-white border-b-2 border-light-gray h-16 flex items-center gap-2 px-4">
        <div
          onClick={() => {
            nav("/messages");
          }}
          style={{ backgroundImage: `url(${ArrowIcon})` }}
          className="w-8 h-8 bg-no-repeat bg-cover cursor-pointer"
        />
        <div
          style={{
            backgroundImage: `url(${
              (reciever.name === "Jerome" && CityBoyJJ) ||
              (reciever.name === "Lilly" && Lilly) ||
              Therapist
            })`,
          }}
          className="w-10 h-10 bg-no-repeat bg-cover"
        />
        <div className="flex flex-col">
          <h3>{reciever.name}</h3>
          <h3 className="text-sm text-gray leading-3">active</h3>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${MessageBg})` }}
      className="w-screen h-screen bg-no-repeat bg-cover flex flex-col"
    >
      <MessagingHeader reciever={reciever} />
      <MessagingBody />

      <div className="relative flex w-full items-center px-4 py-4">
        <MessagingComponent />
        <div
          style={{ backgroundImage: `url(${Logo})`, zIndex: 100 }}
          className={`w-24 h-24 bg-no-repeat bg-cover transition-transform duration-500  ${
            isTyping ? "translate-x-0" : "translate-x-full"
          } absolute right-0`}
          onClick={toggleModal}
        />

        <Modal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </div>
  );
}

export default MessageScreen;
