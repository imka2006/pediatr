import React, { useEffect, useState } from "react";
import logo from "../../assets/icon/Header/logo.svg";
import "./style.scss";

// Функция для получения текущего времени в часовом поясе Кыргызстана
const getKyrgyzDate = () => {
  const dateString = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Bishkek",
  });
  return new Date(dateString);
};

// Проверка, открыт ли салон сейчас
const isOpenNow = (dayIndex, hour) => {
  if (dayIndex >= 0 && dayIndex <= 4) return hour >= 9 && hour < 19;
  if (dayIndex === 5) return hour >= 10 && hour < 18;
  return false;
};

// Возвращает строку часов работы для текущего дня
const getOpenHoursString = (dayIndex) => {
  if (dayIndex >= 0 && dayIndex <= 4) return "9:00 - 19:00";
  if (dayIndex === 5) return "10:00 - 18:00";
  return "выходной";
};

function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };

    updateIsMobile(); // Проверяем сразу при монтировании
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const kyrgyzDate = getKyrgyzDate();
  const todayIndex = (kyrgyzDate.getDay() + 6) % 7;
  const currentHour = kyrgyzDate.getHours();
  const open = isOpenNow(todayIndex, currentHour);

  const statusClass = open ? "active" : "close";
  const statusText = open ? "Открыто" : "Закрыто";
  const openHoursString = getOpenHoursString(todayIndex);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <img className="header-logo" src={logo} alt="logo" />
          {!isMobile ? (
            <ul className="header-list">
              <li className="header-item">
                <a href="tel:+996508766555" className="header-link">
                  0 508 766 555
                </a>
              </li>
              <li className="header-item">
                <a href="tel:+996550766555" className="header-link">
                  0 550 766 555
                </a>
              </li>
              <li className="header-item">
                <a
                  href="https://2gis.kg/bishkek/geo/15763234351069788/74.603008,42.882223"
                  className="header-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  г. Бишкек, ул. Орозбекова 112
                </a>
              </li>
            </ul>
          ) : (
            <div className={`header-btn ${statusClass}`}>
              <div></div>
              <p className="header-info">
                <span className={statusClass}>{statusText}</span>
                19:00 - 9:00
                {openHoursString !== "выходной" ? openHoursString : ""}
                <br />
                ул. Орозбекова 112
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Index;
