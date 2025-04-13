import React, { useState } from "react";
import Tabs from "./Tabs";
import Slider from "./Slider";

function Left() {
  // Храним в state имя выбранной вкладки (например, "Педиатр")
  const [selectedTab, setSelectedTab] = useState("");

  // Обработчик клика, который будет передаваться в Tabs
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="hero-left">
      {/* Передаём колбэк onTabClick, чтобы Tabs мог сообщить, какую вкладку выбрали */}
      <Tabs onTabClick={handleTabClick} />

      {/* Передаём выбранную вкладку (selectedTab) в Slider */}
      <Slider selectedTab={selectedTab} />
    </div>
  );
}

export default Left;