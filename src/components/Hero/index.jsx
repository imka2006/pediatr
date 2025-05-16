import React, { useEffect, useState } from "react";

import Left from "./Left";
import Right from "./Right";
import Top from "./Right/Top";
import Schedule from "./Right/Schedule";

import "./style.scss";

function Hero({ setModal }) {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Устанавливаем при монтировании
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showHeroSee =
    windowWidth !== null && windowWidth >= 530 && windowWidth <= 1295;
  const showSchedule = windowWidth !== null && windowWidth >= 889;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <Left />
          <Right setModal={setModal} />
        </div>

        {showHeroSee && (
          <div className="hero-see">
            <Top setModal={setModal} />
            {showSchedule && <Schedule />}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
