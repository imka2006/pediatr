import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

import BigStar from "../../../assets/icon/Reviews/BigStar.svg";
import Bg from "../../../assets/img/Bg/TwoGis.png";

import "./style.scss";
import "aos/dist/aos.css";

function TwoGis() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = window.innerWidth <= 700;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
            }
        );

        const node = ref.current;

        // Добавляем задержку перед observe
        const timeout = setTimeout(() => {
            if (node) observer.observe(node);
        }, 50);

        return () => {
            clearTimeout(timeout);
            if (node) observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div
                ref={ref}
                className={`reviews-main reviews-block ${
                    isVisible ? "animate" : ""
                }`}
            >
                {isMobile ? (
                    <img
                        className="reviews-main__bg"
                        data-aos="fade-up-left"
                        src={Bg}
                        alt="bg"
                    />
                ) : (
                    <img className="reviews-main__bg" src={Bg} alt="bg" />
                )}

                <h3 className="reviews-main__title">
                    Отзывы <span>2Gis</span>
                </h3>
                <div className="reviews-main__grade">4.9</div>
                <div className="reviews-main__counter">203 оценки</div>
                <div className="reviews-main__star">
                    {Array.from({ length: 5 }, (_, index) => (
                        <img key={index} src={BigStar} alt="star" />
                    ))}
                </div>
            </div>
        </>
    );
}

export default TwoGis;
