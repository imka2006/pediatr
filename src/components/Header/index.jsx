import React from "react";
import logo from "../../assets/icon/Header/logo.svg";
import "./style.scss";

// Функция для получения текущего времени в часовом поясе Кыргызстана (Asia/Bishkek)
const getKyrgyzDate = () => {
  const dateString = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Bishkek",
  });
  return new Date(dateString);
};

// Логика определения, открыт ли салон сейчас (исходя из часов работы в примере – 9:00–19:00 в будни)
const isOpenNow = (dayIndex, hour) => {
  // Понедельник–пятница (0..4): 9–19
  if (dayIndex >= 0 && dayIndex <= 4) {
    return hour >= 9 && hour < 19;
  }
  // Суббота (5): 10–18
  if (dayIndex === 5) {
    return hour >= 10 && hour < 18;
  }
  // Воскресенье (6): выходной
  return false;
};

// Определяем строку с часами работы на текущий день (для мобильной версии, можно адаптировать под нужды)
const getOpenHoursString = (dayIndex) => {
  // Понедельник–пятница
  if (dayIndex >= 0 && dayIndex <= 4) {
    return "9:00 - 19:00";
  }
  // Суббота
  if (dayIndex === 5) {
    return "10:00 - 18:00";
  }
  // Воскресенье
  return "выходной";
};

function Index() {
  // Получаем дату и время в Бишкекском часовом поясе
  const kyrgyzDate = getKyrgyzDate();

  // dayIndex: 0 = пн, 6 = вс (так как JS Sunday=0, делаем (getDay() + 6) % 7)
  const todayIndex = (kyrgyzDate.getDay() + 6) % 7;
  const currentHour = kyrgyzDate.getHours();

  // Определяем, открыт ли салон сейчас
  const open = isOpenNow(todayIndex, currentHour);

  // Формируем класс и текст для статуса
  const statusClass = open ? "active" : "close";
  const statusText = open ? "Открыто" : "Закрыто";

  // Собираем описание часов работы под этот день
  const openHoursString = getOpenHoursString(todayIndex);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <img className="header-logo" src={logo} alt="logo" />
            {window.innerWidth >= 700 ? (
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
              // Мобильная версия: добавляем классы active или close
              <div className={`header-btn ${statusClass}`}>
                <div></div>
                <p className="header-info">
                  <span className={statusClass} >{statusText}</span>
                  {openHoursString !== "выходной" ? openHoursString : ""}
                  <br />
                  ул. Орозбекова 112
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Index;