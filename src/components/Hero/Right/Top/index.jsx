import React, { useEffect, useRef, useState } from "react";

import AOS from "aos";
import Whatsapp from "../../../../assets/icon/Blog/Whatsapp.webp";
import Bg from "../../../../assets/img/Bg/Top.png";
import BgMb from "../../../../assets/img/Bg/MobileTop.png";
import Babe from "../../../../assets/img/right/Top/Babe.png";

import "./style.scss";

import "aos/dist/aos.css";
function Top({ setModal }) {
    const heroRef = useRef(null);
    const imgRef = useRef(null);

    const [heroAnimated, setHeroAnimated] = useState(false);
    const isMobile = window.innerWidth <= 700;

    // ⬇️ Анимация hero-top — только один раз, с отступом под хедер
    // useEffect(() => {
    //     const node = heroRef.current;
    //     if (!node || heroAnimated) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 setHeroAnimated(true);
    //                 observer.disconnect(); // один раз
    //             }
    //         },
    //         {
    //             threshold: 0.3,
    //             rootMargin: "-10% 0px 0px 0px", // отступ под хедер
    //         }
    //     );

    //     observer.observe(node);
    //     return () => observer.disconnect();
    // }, [heroAnimated]);

    // // ⬇️ Анимация фона — каждый раз, когда входит в зону
    // useEffect(() => {
    //     const node = imgRef.current;
    //     if (!node || !isMobile) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 node.classList.add("animate");
    //             } else {
    //                 node.classList.remove("animate");
    //             }
    //         },
    //         {
    //             threshold: 0.3,
    //         }
    //     );

    //     observer.observe(node);
    //     return () => observer.disconnect();
    // }, [isMobile]);
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div ref={heroRef} className={`hero-top`} data-aos="fade-up">
            {isMobile ? (
                <img
                    className={`hero-top__bg`}
                    data-aos="fade-bottom"
                    src={BgMb}
                    alt="bg"
                />
            ) : (
                <img className={`hero-top__bg we`}  src={Bg} alt="bg" />
            )}
            <h1 className="hero-top__title">
                Детский центр доказательной медицины
                <span>«Мама Доктор»</span>
            </h1>
            <p className="hero-top__text">
                <span>"Доказательный педиатр"</span> - это ОТВЕТСТВЕННЫЙ подход
                к ЗДОРОВЬЮ ребенка.
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
            {!isMobile && (
                <img src={Babe} className="hero-top__babe" alt="babe" />
            )}
        </div>
    );
}

export default Top;
