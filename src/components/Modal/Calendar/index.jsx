import React, { useState } from "react";
import "./style.scss";

const daysOfWeekRu = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

// Функция, формирующая строку вида "DD.MM.YYYY-деньНедели"
function formatDateWithDayName(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  // dayOfWeek: 0=вс ... 6=сб
  const dayName = daysOfWeekRu[date.getDay()];
  return `${d}.${m}.${y}-${dayName}`;
}

function generateCalendarData(year, month) {
  const firstDay = new Date(year, month, 1);
  // 0=Воскресенье ... 6=Суббота. Для «русской» структуры смещаем: (firstDay.getDay() + 6) % 7
  const startDayOfWeek = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let currentDay = 1;
  const rowCount = Math.ceil((startDayOfWeek + daysInMonth) / 7);

  for (let i = 0; i < rowCount; i++) {
    const daysRow = [];
    for (let j = 0; j < 7; j++) {
      const cellIndex = i * 7 + j;
      if (cellIndex >= startDayOfWeek && currentDay <= daysInMonth) {
        daysRow.push(currentDay);
        currentDay++;
      } else {
        daysRow.push(null);
      }
    }
    weeks.push(daysRow);
  }
  return weeks;
}

function getWorkingHours(date) {
  const dayOfWeek = date.getDay(); // 0=вс, 6=сб
  if (dayOfWeek === 0) {
    return ["Выходной"];
  }
  if (dayOfWeek === 6) {
    // Суббота
    const hours = [];
    for (let h = 10; h <= 18; h++) {
      hours.push(`${h}:00`);
    }
    return hours;
  }
  // Будни
  const hours = [];
  for (let h = 9; h <= 21; h++) {
    hours.push(`${h}:00`);
  }
  return hours;
}

const Calendar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const todayDate = today.getDate();

  // По умолчанию выбран сегодняшний день
  const [selectedDay, setSelectedDay] = useState(todayDate);

  // Вместо одного массива используем объект selectedData:
  // { "12.04.2025-сб": ["10:00","11:00"], "14.04.2025-пн": ["10:00"], ... }
  const [selectedData, setSelectedData] = useState({});

  // Генерируем данные календаря (один месяц)
  const calendarData = generateCalendarData(currentYear, currentMonth);

  // Обработка клика по дню
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Обработка клика по часу
  const handleHourClick = (hour) => {
    const dateObj = new Date(currentYear, currentMonth, selectedDay);
    const dayKey = formatDateWithDayName(dateObj); // Например, "12.04.2025-сб"

    setSelectedData((prevData) => {
      const prevHours = prevData[dayKey] || [];
      // Если час уже выбран, удаляем, иначе добавляем
      if (prevHours.includes(hour)) {
        const newHours = prevHours.filter((h) => h !== hour);
        return {
          ...prevData,
          [dayKey]: newHours,
        };
      } else {
        const newHours = [...prevHours, hour];
        return {
          ...prevData,
          [dayKey]: newHours,
        };
      }
    });
  };

  // Текущая дата
  const selectedDate = new Date(currentYear, currentMonth, selectedDay);
  const dayKey = formatDateWithDayName(selectedDate);

  // Массив выбранных часов для текущего дня
  const selectedHoursForThisDay = selectedData[dayKey] || [];

  // Пример итогового массива finishDate
  const finishDate = Object.entries(selectedData)
    // убираем дни без выбранных часов
    .filter(([_, hours]) => hours.length > 0)
    // превращаем { "12.04.2025-сб": ["10:00","11:00"] }
    // в ["12.04.2025-сб-10:00-11:00"]
    .map(([dateStr, hours]) => dateStr + "-" + hours.join("-"));

  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <div className="calendar-left">
          <table className="calendar-table">
            <thead className="calendar-thead">
              <tr className="calendar-tr">
                <th className="calendar-th">ПН</th>
                <th className="calendar-th">ВТ</th>
                <th className="calendar-th">СР</th>
                <th className="calendar-th">ЧТ</th>
                <th className="calendar-th">ПТ</th>
                <th className="calendar-th">СБ</th>
                <th className="calendar-th calendar-sunday">ВС</th>
              </tr>
            </thead>
            <tbody className="calendar-tbody">
              {calendarData.map((week, wIndex) => (
                <tr key={wIndex} className="calendar-tr">
                  {week.map((day, dIndex) => {
                    if (!day) {
                      return (
                        <td
                          key={dIndex}
                          className="calendar-td calendar-emptyCell"
                        >
                          &nbsp;
                        </td>
                      );
                    }

                    // Проверяем, считается ли этот день прошедшим
                    const isPastDay =
                      day < todayDate &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear();

                    const dateObj = new Date(currentYear, currentMonth, day);
                    // Проверка на воскресенье
                    const isSunday = dateObj.getDay() === 0;

                    const tdClass = [
                      "calendar-td",
                      isPastDay ? "wasted" : "",
                      day === selectedDay ? "active" : "",
                      isSunday ? "sunday" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <td
                        key={dIndex}
                        className={tdClass}
                        onClick={
                          !isPastDay
                            ? () => handleDayClick(day)
                            : undefined
                        }
                      >
                        {day}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="calendar-hoursBlock">
          <h3 className="calendar-hoursBlockTitle">Свободные часы</h3>
          <ul className="calendar-hoursList">
            {getWorkingHours(selectedDate).map((hour, idx) => {
              if (hour === "Выходной") {
                return (
                  <li key={idx} className="calendar-item day-off">
                    {hour}
                  </li>
                );
              }

              const isSelected = selectedHoursForThisDay.includes(hour);
              const liClass = isSelected ? "free" : "busy";

              return (
                <li
                  key={idx}
                  className={`calendar-item ${liClass}`}
                  onClick={() => handleHourClick(hour)}
                >
                  {hour}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Для наглядности – выводим результат формирования finishDate */}
      <div style={{ marginTop: "1rem" }}>
        <strong>Итоговый массив finishDate:</strong>
        <pre>{JSON.stringify(finishDate, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Calendar;