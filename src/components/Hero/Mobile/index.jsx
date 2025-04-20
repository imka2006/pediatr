import React, { useState, useEffect } from "react";
import twoGis from "../../../assets/icon/Right/Location/twoGis.svg";
import googleMap from "../../../assets/icon/Right/Location/googleMap.svg";
import yandexMap from "../../../assets/icon/Right/Location/yandexMap.svg";

const daysData = [
  { short: "пн", full: "Понедельник" },
  { short: "вт", full: "Вторник" },
  { short: "ср", full: "Среда" },
  { short: "чт", full: "Четверг" },
  { short: "пт", full: "Пятница", active: true },
  { short: "сб", full: "Суббота", hours: "10 – 18" },
  { short: "вс", full: "Воскресенье", isSunday: true, hours: "выходной" },
];

function Mobile() {
  // Состояние, отвечающее за то, показывать ли полные названия дней
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="hero-location">
        <h3 className="hero-schedule__title">График работы</h3>
        <ul className="hero-schedule__days">
          {daysData.map((day, index) => (
            <li
              key={index}
              className={
                "hero-schedule__item" +
                (day.active ? " active" : "") +
                (day.isSunday ? " sunday" : "")
              }
            >
              {/* Если ширина экрана <= 600 пикселей, отображаем полное название,
                  иначе — короткое */}
              <span
                className="hero-schedule__day"
                style={{ marginRight: "4px" }}
              >
                {isMobile ? day.full : day.short}
              </span>

              <span
                className={
                  "hero-schedule__separator" + (day.isSunday ? " sunday" : "")
                }
              ></span>

              {/* Если есть часы, показываем их. Если "выходной", показываем текст выходного */}
              {day.hours && day.hours !== "выходной" && (
                <span className="hero-schedule__hours">{day.hours}</span>
              )}
              {day.hours === "выходной" && (
                <span className="hours">{day.hours}</span>
              )}
            </li>
          ))}

          <li className="hero-schedule__bigtime hero-schedule__hours">9-21</li>
        </ul>
        <p className="hero-schedule__note">Принимаем строго по записи!</p>

        <h3 className="hero-location__title">Местоположение</h3>
        <h4 className="hero-location__name">ул. Орозбекова 112, г. Бишкек</h4>
        <p className="hero-location__text">
          риентир пересекает ул. Фрунзе, напротив СШ №27
        </p>
        <div className="hero-location__content">
          <button className="hero-location__btn">Открыть карту</button>
          <a href="#" className="hero-location__link">
            <img src={twoGis} alt="twoGis" />
          </a>
          <a href="#" className="hero-location__link">
            <img src={googleMap} alt="googleMap" />
          </a>
          <a href="#" className="hero-location__link">
            <img src={yandexMap} alt="yandexMap" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Mobile;