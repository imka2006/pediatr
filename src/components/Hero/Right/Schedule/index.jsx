import React, { useEffect, useRef, useState } from "react";

import "./style.scss";

function Schedule() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        const node = ref.current;
        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);
    // Функция для получения текущего времени в часовом поясе Кыргызстана (Asia/Bishkek)
    const getKyrgyzDate = () => {
        // Берём текущую дату и приводим к часовому поясу Asia/Bishkek
        const dateString = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Bishkek",
        });
        return new Date(dateString);
    };

    // Массив с днями недели (пн начинается с индекса 0, вс – с индексом 6)
    const days = [
        { label: "пн", isHoliday: false, hours: "" },
        { label: "вт", isHoliday: false, hours: "" },
        { label: "ср", isHoliday: false, hours: "" },
        { label: "чт", isHoliday: false, hours: "" },
        { label: "пт", isHoliday: false, hours: "" },
        { label: "сб", isHoliday: false, hours: "10 – 18" },
        { label: "вс", isHoliday: true, hours: "выходной" },
    ];

    // Получаем дату/время для Кыргызстана
    const kyrgyzDate = getKyrgyzDate();

    // В JavaScript getDay() вернет число (0 = воскресенье, 1 = понедельник, ...),
    // поэтому, чтобы пн = 0, а вс = 6, делаем такой сдвиг: (day + 6) % 7
    const todayIndex = (kyrgyzDate.getDay() + 6) % 7;

    // Определяем текущий час по часам Бишкекского времени
    const currentHour = kyrgyzDate.getHours();

    // Логика определения, открыт ли салон прямо сейчас
    const isOpenNow = (dayIndex, hour) => {
        /* 
      Понедельник–пятница (indexes 0..4): открыто с 9 до 21
      Суббота (index 5): открыто с 10 до 18
      Воскресенье (index 6): выходной
    */
        if (dayIndex >= 0 && dayIndex <= 4) {
            // Пн–Пт: 9–21
            return hour >= 9 && hour < 21;
        }
        if (dayIndex === 5) {
            // Сб: 10–18
            return hour >= 10 && hour < 18;
        }
        // Вс – всегда закрыто
        return false;
    };

    // Определяем, открыт ли салон сейчас
    const salonOpen = isOpenNow(todayIndex, currentHour);

    // Задаём классы и текст statuses
    const statusClass = salonOpen ? "active" : "close";
    const statusText = salonOpen ? "Сейчас открыто" : "Сейчас закрыто";

    return (
        <div ref={ref} className={`hero-schedule ${isVisible ? "animate" : ""}`}>
            <h3 className="hero-schedule__title">График работы</h3>
            <div className="hero-schedule__wrapper">
                {/* Статус салона */}
                <div className={`hero-schedule__status ${statusClass}`}>
                    <span className="hero-schedule__dot"></span>
                    {statusText}
                </div>

                <ul className="hero-schedule__days">
                    {days.map((dayObj, i) => {
                        const isActiveDay = i === todayIndex ? "active" : "";
                        // Дополнительно проверяем, если воскресенье
                        const isSunday = dayObj.label === "вс" ? "sunday" : "";

                        return (
                            <li
                                key={dayObj.label}
                                className={`hero-schedule__item ${isActiveDay}`}
                            >
                                <span
                                    className={`hero-schedule__day ${isSunday}`}
                                >
                                    {dayObj.label}
                                </span>
                                <span
                                    className={`hero-schedule__separator ${isSunday}`}
                                ></span>
                                {dayObj.hours && (
                                    <span
                                        className={`hero-schedule__hours ${
                                            isSunday ? "hours" : ""
                                        }`}
                                    >
                                        {dayObj.hours}
                                    </span>
                                )}
                            </li>
                        );
                    })}

                    {/* Строка с общей информацией о графике */}
                    <li className="hero-schedule__bigtime hero-schedule__hours">
                        9-21
                    </li>
                </ul>
                <p className="hero-schedule__note">
                    Принимаем строго по записи!
                </p>
            </div>
        </div>
    );
}

export default Schedule;
