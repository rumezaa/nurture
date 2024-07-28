import React from "react";
import NavImg from "./images/Nav.svg";
import ChatIcon from "./images/Chat_icon.svg";
import CalIcon from "./icons/CalIcon";
import JournalIcon from "./icons/JournalIcon";

export default function Nav({selected}) {
  const Circle = () => {
    return (
      <div className="rounded-full h-16 w-16 bg-accent-purple flex  justify-center items-center mb-4">
        <div
          style={{ backgroundImage: `url(${ChatIcon})` }}
          className="w-10 h-10 bg-no-repeat bg-cover"
        />
      </div>
    );
  };

  const goHome = () => {
    window.location.href = "/"
  }

  const goNotes = () => {
    window.location.href = "/notes"
  }
  return (
    <div
      style={{ backgroundImage: `url(${NavImg})` }}
      className="h-16 bg-no-repeat bg-contain flex justify-center gap-36"
    >
      <div className="flex flex-col  justify-center items-center" onClick={goHome}>
        <CalIcon selected={selected == "home"} />
        <h3 className="text-accent-purple text-center font-light">Home</h3>
      </div>

      <div className="absolute top-4">
        <Circle />
      </div>
      <div className="flex flex-col justify-center items-center" onClick={goNotes}>
        <JournalIcon selected={selected == "notes"} />
        <h3 className="text-accent-purple text-center font-light">Notes</h3>
      </div>
    </div>
  );
}
