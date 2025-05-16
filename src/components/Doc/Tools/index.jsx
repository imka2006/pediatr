import { useEffect, useRef, useState } from "react";
import AOS from "aos";

import Leandia from "../../../assets/img/Doc/Tools/Leandia.webp";
import Litmann from "../../../assets/img/Doc/Tools/Litmann.webp";
import Baxter from "../../../assets/img/Doc/Tools/Baxter.webp";
import Bg from "../../../assets/img/Bg/Tools.webp";
import BgMb from "../../../assets/img/Bg/MobileTools.webp";

import "aos/dist/aos.css";
import "./style.scss";

function Tools() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div ref={ref} className="doc-tools" data-aos="fade-up">
      <img
        src={isMobile ? BgMb : Bg}
        alt="background"
        className="doc-tools__bg"
        data-aos={isMobile ? "fade-down-right" : undefined}
      />

      <div className="doc-tools__wrapper">
        <div className="doc-tools__content">
          <h3 className="doc-tools__title">Наши инструменты и оборудование</h3>
          <p className="doc-tools__text">
            — эффективные и безопасные решения для здоровья детей.
          </p>
        </div>
        <img className="doc-tools__img" src={Leandia} alt="Leandia" />
      </div>

      <div className="doc-tools__images">
        <img src={Litmann} alt="Litmann" />
        <img src={Baxter} alt="Baxter" />
      </div>
    </div>
  );
}

export default Tools;
