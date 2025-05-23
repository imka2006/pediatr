import React, { useEffect, useState } from "react";
import AOS from "aos";

import twoGis from "../../../assets/icon/Hero/Right/Location/twoGis.svg";
import googleMap from "../../../assets/icon/Hero/Right/Location/googleMap.svg";
import yandexMap from "../../../assets/icon/Hero/Right/Location/yandexMap.svg";

import "aos/dist/aos.css";

function Mobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [todayIndex, setTodayIndex] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getKyrgyzDate = () => {
      const dateString = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Bishkek",
      });
      return new Date(dateString);
    };

    const date = getKyrgyzDate();
    const jsDayIndex = date.getDay();
    const localIndex = (jsDayIndex + 6) % 7; // сдвиг понедельника к 0
    setTodayIndex(localIndex);
  }, []);

  const daysData = [
    { short: "пн", full: "Понедельник" },
    { short: "вт", full: "Вторник" },
    { short: "ср", full: "Среда" },
    { short: "чт", full: "Четверг" },
    { short: "пт", full: "Пятница" },
    { short: "сб", full: "Суббота", hours: "10 – 18" },
    { short: "вс", full: "Воскресенье", isSunday: true, hours: "выходной" },
  ];

  return (
    <div className="hero-location" data-aos="fade-up">
      <h3 className="hero-schedule__title">График работы</h3>

      <ul className="hero-schedule__days">
        {daysData.map((day, index) => {
          const isActive = index === todayIndex;
          return (
            <li
              key={index}
              className={
                "hero-schedule__item" +
                (isActive ? " active" : "") +
                (day.isSunday ? " sunday" : "")
              }
            >
              <span className="hero-schedule__day">
                {isMobile ? day.full : day.short}
              </span>
              <span
                className={
                  "hero-schedule__separator" + (day.isSunday ? " sunday" : "")
                }
              ></span>
              {day.hours && day.hours !== "выходной" && (
                <span className="hero-schedule__hours">{day.hours}</span>
              )}
              {day.hours === "выходной" && (
                <span className="hero-schedule__hours-another">{day.hours}</span>
              )}
            </li>
          );
        })}
        <li className="hero-schedule__bigtime hero-schedule__hours">9-21</li>
      </ul>

      <p className="hero-schedule__note">Принимаем строго по записи!</p>

      <h3 className="hero-location__title">Местоположение</h3>
      <h4 className="hero-location__name">ул. Орозбекова 112, г. Бишкек</h4>
      <p className="hero-location__text">
        ориентир пересекает ул. Фрунзе, напротив СШ №27
      </p>
      <div className="hero-location__content">
        <a href="#" target="_blank" className="hero-location__btn">Открыть карту</a>
        <a href="#" target="_blank" className="hero-location__link">
          <img src={twoGis} alt="twoGis" />
        </a>
        <a href="#" target="_blank" className="hero-location__link">
          <img src={googleMap} alt="googleMap" />
        </a>
        <a href="#" target="_blank" className="hero-location__link">
          <img src={yandexMap} alt="yandexMap" />
        </a>
      </div>
    </div>
  );
}

export default Mobile;
