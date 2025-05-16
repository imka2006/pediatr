import React, { useEffect } from "react";
import AOS from "aos";

import "./style.scss";
import "aos/dist/aos.css";

function Schedule() {
  const getKyrgyzDate = () => {
    const dateString = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Bishkek",
    });
    return new Date(dateString);
  };

  const days = [
    { label: "пн", isHoliday: false, hours: "" },
    { label: "вт", isHoliday: false, hours: "" },
    { label: "ср", isHoliday: false, hours: "" },
    { label: "чт", isHoliday: false, hours: "" },
    { label: "пт", isHoliday: false, hours: "" },
    { label: "сб", isHoliday: false, hours: "10 – 18" },
    { label: "вс", isHoliday: true, hours: "выходной" },
  ];

  const kyrgyzDate = getKyrgyzDate();
  const todayIndex = (kyrgyzDate.getDay() + 6) % 7;
  const currentHour = kyrgyzDate.getHours();

  const isOpenNow = (dayIndex, hour) => {
    if (dayIndex >= 0 && dayIndex <= 4) return hour >= 9 && hour < 21;
    if (dayIndex === 5) return hour >= 10 && hour < 18;
    return false;
  };

  const salonOpen = isOpenNow(todayIndex, currentHour);
  const statusClass = salonOpen ? "active" : "close";
  const statusText = salonOpen ? "Сейчас открыто" : "Сейчас закрыто";

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero-schedule" data-aos="fade-up">
      <h3 className="hero-schedule__title">График работы</h3>
      <div className="hero-schedule__wrapper">
        <div className={`hero-schedule__status ${statusClass}`}>
          <span className="hero-schedule__dot"></span>
          {statusText}
        </div>

        <ul className="hero-schedule__days">
          {days.map(({ label, isHoliday, hours }, i) => {
            const isActiveDay = i === todayIndex ? "active" : "";
            const isSunday = label === "вс" ? "sunday" : "";

            return (
              <li key={label} className={`hero-schedule__item ${isActiveDay}`}>
                <span className={`hero-schedule__day ${isSunday}`}>{label}</span>
                <span className={`hero-schedule__separator ${isSunday}`}></span>
                {hours && (
                  <span className={`hero-schedule__hours ${isSunday ? "hours" : ""}`}>
                    {hours}
                  </span>
                )}
              </li>
            );
          })}
          <li className="hero-schedule__bigtime hero-schedule__hours">9-21</li>
        </ul>
        <p className="hero-schedule__note">Принимаем строго по записи!</p>
      </div>
    </div>
  );
}

export default Schedule;
