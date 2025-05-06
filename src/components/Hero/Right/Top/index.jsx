import React, { useEffect, useRef, useState } from "react";

import Whatsapp from "../../../../assets/icon/Right/Whatsapp.svg";
import Bg from "../../../../assets/img/Bg/Hero.png";
import BgMb from "../../../../assets/img/Bg/MobileHeart.png";
import Babe from "../../../../assets/img/right/Top/Babe.png";

import "./style.scss";

function Top({ setModal }) {
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

    return (
        <>
            <div ref={ref} className={`hero-top ${isVisible ? "animate" : ""}`}>
                <img className="hero-top__bg" src={Bg} alt="bg" />
                <img className="hero-top__bg color" src={BgMb} alt="bg" />
                <h1 className="hero-top__title">
                    Детский центр доказательной медицины
                    <span>«Мама Доктор»</span>
                </h1>
                <p className="hero-top__text">
                    <span>"Доказательный педиатр"</span> - это ОТВЕТСТВЕННЫЙ
                    подход к ЗДОРОВЬЮ ребенка.
                </p>
                <div className="hero-top__info">
                    <button
                        onClick={() => setModal(true)}
                        className="hero-top__btn btn-active"
                    >
                        Записаться
                    </button>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                </div>
                {window.innerWidth > 700 ? (
                    <img src={Babe} className="hero-top__babe" alt="babe" />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Top;
