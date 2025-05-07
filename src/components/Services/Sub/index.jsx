import React, { useEffect, useRef, useState } from "react";

import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/Sub.png";
import MobileBg from "../../../assets/img/Bg/MobileSub.png";

import "./style.scss";

function Sub() {
    const list = [
        "Личный врач на связи",
        "Внеочередная запись",
        "Доступен - Выезд на дом",
        "Персональные план наблюдения",
    ];
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
           const node = ref.current;
           if (!node) return;
       
           const observer = new IntersectionObserver(
               ([entry]) => {
                   if (entry.isIntersecting) {
                       setIsVisible(true);
                       observer.disconnect(); // полностью отключаем наблюдателя
                   }
               },
               { threshold: 0.3 }
           );
       
           observer.observe(node);
       
           return () => {
               observer.disconnect(); // на случай размонтирования
           };
       }, []);

    return (
        <>
            <div
                ref={ref}
                className={`services-sub ${isVisible ? "animate" : ""}`}
            >
                {window.innerWidth >= 700 ? (
                    <img className="services-sub__bg" src={Bg} alt="bg" />
                ) : (
                    <img
                        className="services-sub__bg color"
                        src={MobileBg}
                        alt="bg"
                    />
                )}
                <div className="services-sub__wrapper">
                    <h3 className="services-sub__title">Подписка 365</h3>
                    <h4 className="services-sub__subtitle">“Доктор рядом”</h4>
                    {window.innerWidth <= 700 ? (
                        <></>
                    ) : (
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
                {window.innerWidth <= 700 ? (
                    <button className="services-sub__btn">Подробнее</button>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Sub;
