import React, { useState } from "react";
import Tabs from "./Tabs";
import Slider from "./Slider";

function Left() {
  const [selectedTab, setSelectedTab] = useState("Педиатр");
  
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="hero-left">
      <Tabs onTabClick={handleTabClick} />
      <Slider selectedTab={selectedTab} />
    </div>
  );
}

export default Left;