import React from "react";
import Nav from "./Nav";

function Home() {
  return (
    <div className="w-screen h-screen bg-base-purple p-10">
      <Nav selected={"home"} />
    </div>
  );
}

export default Home;
