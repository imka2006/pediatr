import React, { useEffect } from "react";
import AOS from 'aos';

import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/Sub.webp";
import BgMg from "../../../assets/img/Bg/MobileSub.webp";

import "./style.scss";
import 'aos/dist/aos.css';

function Sub() {
  const list = [
    "Личный врач на связи",
    "Внеочередная запись",
    "Доступен - Выезд на дом",
    "Персональные план наблюдения",
  ];

  const isMobile = window.innerWidth <= 700;

 
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className="services-sub" data-aos="fade-up">
      <img
        className="services-sub__bg"
        src={isMobile ? BgMg : Bg}
        alt="bg"
        {...(isMobile && { 'data-aos': 'fade-bottom' })}
      />

      <div className="services-sub__wrapper">
        <h3 className="services-sub__title">Подписка 365</h3>
        <h4 className="services-sub__subtitle">“Доктор рядом”</h4>
        {!isMobile && (
          <button className="services-sub__btn">Подробнее</button>
        )}
      </div>

      <ul className="services-sub__list">
        {list.map((item) => (
          <li key={item} className="services-sub__item">
            <img src={Check} alt="check" /> {item}
          </li>
        ))}
      </ul>

      {isMobile && (
        <button className="services-sub__btn">Подробнее</button>
      )}
    </div>
  );
}

export default Sub;
