import React from "react";
import Nav from "./Nav";
import FamilyNotes from "./images/Family.png";
import Journal from "./images/Journal.png";
import { useNavigate } from "react-router-dom";

function JournalScreen() {
  const nav = useNavigate();
  return (
    <div className="h-screen bg-base-purple flex flex-col content-start">
      <div
        className="h-5/6 flex flex-col justify-center content-center gap-y-4"
        style={{ marginBottom: "2rem" }}
      >
        <div
          style={{ backgroundImage: `url(${Journal})` }}
          className={`bg-no-repeat bg-contain bg-center h-1/3`}
          onClick={() => nav("/personal")}
        />
        <div
          style={{ backgroundImage: `url(${FamilyNotes})` }}
          className={`bg-no-repeat bg-contain bg-center h-1/3`}
          onClick={() => nav("/family")}
        />
      </div>
      <Nav selected={"notes"} />
    </div>
  );
}

export default JournalScreen;
