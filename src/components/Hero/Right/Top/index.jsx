import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

import Whatsapp from "../../../../assets/icon/Blog/Whatsapp.webp";
import Bg from "../../../../assets/img/Bg/Top.webp";
import BgMb from "../../../../assets/img/Bg/MobileTop.webp";
import Babe from "../../../../assets/img/Hero/Right/Top/Babe.png";

import "./style.scss";
import "aos/dist/aos.css";

function Top({ setModal }) {
  const heroRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div ref={heroRef} className="hero-top" data-aos="fade-up">
      {isMobile ? (
        <img
          className="hero-top__bg"
          data-aos="fade-bottom"
          src={BgMb}
          alt="bg"
        />
      ) : (
        <img className="hero-top__bg we" src={Bg} alt="bg" />
      )}
      <h1 className="hero-top__title">
        Детский центр доказательной медицины
        <span>«Мама Доктор»</span>
      </h1>
      <p className="hero-top__text">
        <span>"Доказательный педиатр"</span> - это ОТВЕТСТВЕННЫЙ подход к ЗДОРОВЬЮ ребенка.
      </p>
      <div className="hero-top__info">
        <button onClick={() => setModal(true)} className="hero-top__btn btn-active">
          Записаться
        </button>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
      </div>
      {!isMobile && <img src={Babe} className="hero-top__babe" alt="babe" />}
    </div>
  );
}

export default Top;
