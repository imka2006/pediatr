import React, { useState, useEffect } from "react";

import Close from "../../../assets/icon/Modal/Close.svg"

import "./style.scss";

const daysOfWeekRu = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

const formatDateWithDayName = (date) => {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  const dayName = daysOfWeekRu[date.getDay()];
  return `${d}.${m}.${y}-${dayName}`;
};

const generateCalendarData = (year, month) => {
  const startDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks = [];

  let day = 1;
  const totalRows = Math.ceil((startDay + daysInMonth) / 7);

  for (let i = 0; i < totalRows; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      week.push((i * 7 + j) >= startDay && day <= daysInMonth ? day++ : null);
    }
    weeks.push(week);
  }
  return weeks;
};

const getWorkingHours = (date) => {
  const day = date.getDay();
  if (day === 0) return ["Выходной"];
  const start = day === 6 ? 10 : 9;
  const end = day === 6 ? 18 : 21;
  return Array.from({ length: end - start + 1 }, (_, i) => `${start + i}:00`);
};

const Calendar = ({ setFinishDate, setCalendar }) => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedData, setSelectedData] = useState({});

  const calendarData = generateCalendarData(today.getFullYear(), today.getMonth());
  const selectedDate = new Date(today.getFullYear(), today.getMonth(), selectedDay);
  const dayKey = formatDateWithDayName(selectedDate);
  const selectedHours = selectedData[dayKey] || [];

  const handleDayClick = (day) => setSelectedDay(day);

  const handleHourClick = (hour) => {
    setSelectedData((prev) => {
      const hours = prev[dayKey] || [];
      const updatedHours = hours.includes(hour)
        ? hours.filter(h => h !== hour)
        : [...hours, hour];
      return { ...prev, [dayKey]: updatedHours };
    });
  };

  // Когда selectedData меняется — обновляем finishDate родителю
  useEffect(() => {
    const result = Object.entries(selectedData)
      .filter(([_, hours]) => hours.length > 0)
      .map(([date, hours]) => `${date}-${hours.join("-")}`);
    setFinishDate(result);
  }, [selectedData, setFinishDate]);

  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <div className="calendar-left">
          <table className="calendar-table">
            <thead>
              <tr>{["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map(d => <th className="calendar-th" key={d}>{d}</th>)}</tr>
            </thead>
            <tbody>
              {calendarData.map((week, i) => (
                <tr key={i}>
                  {week.map((day, j) => {
                    const dateObj = new Date(today.getFullYear(), today.getMonth(), day || 1);
                    const isPast = day && day < today.getDate() && today.getMonth() === dateObj.getMonth();
                    const isSunday = dateObj.getDay() === 0;
                    const classes = [
                      "calendar-td",
                      isPast && "wasted",
                      day === selectedDay && "active",
                      isSunday && "sunday"
                    ].filter(Boolean).join(" ");

                    return (
                      <td key={j} className={classes} onClick={!isPast && day ? () => handleDayClick(day) : undefined}>
                        {day || ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="calendar-hoursBlock">
        <img src={Close} onClick={() => setCalendar(false)} className="calendar-close" alt="" />
          <h3>Свободные часы</h3>
          <ul className="calendar-hoursList">
            {getWorkingHours(selectedDate).map((hour, idx) => (
              <li
                key={idx}
                className={`calendar-item ${hour === "Выходной" ? "day-off" : selectedHours.includes(hour) ? "free" : "busy"}`}
                onClick={hour !== "Выходной" ? () => handleHourClick(hour) : undefined}
              >
                {hour}
              </li>
            ))}
          </ul>

          <button onClick={() => setCalendar(false)} className="calendar-btn">Готово</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
