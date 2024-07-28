import React from "react";
import Nav from "./Nav";
import Insights from "./images/Insights.png";
import InsightsOpen from "./images/Insights_Open.png";
import Calendar from "./images/Calendar.png";
import CalendarOpen from "./images/Calendar_open.png";
import { useState } from "react";

function Home() {
  const [cal, setCal] = useState(false);
  const [insights, setInsights] = useState(false);

  const openInsights = () => {
    setInsights(!cal);
    setCal(!cal);
  };

  return (
    <div className="h-screen bg-base-purple flex flex-col content-start">
      <div
        className="w-screen h-5/6 px-10 flex flex-col gap-y-4"
        style={{ marginBottom: "2rem" }}
      >
        <div
          style={{
            backgroundImage: `url(${insights ? InsightsOpen : Insights})`,
            height: `${cal ? "50%" : "20%"}`,
            marginTop: `${(!cal && "1rem") || "0"}`,
          }}
          className={`bg-no-repeat bg-contain bg-center`}
          onClick={openInsights}
        />
        <div
          style={{
            backgroundImage: `url(${cal ? Calendar : CalendarOpen})`,
            height: `${cal ? "50%" : "70%"}`,
          }}
          className={`bg-no-repeat bg-contain bg-center`}
        />
      </div>
      <Nav selected={"home"} />
    </div>
  );
}

export default Home;
