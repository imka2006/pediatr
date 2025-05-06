import React, { useEffect, useRef, useState } from "react";

import Icon from "../../../assets/icon/Services/Heart/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Heart/MobileIcon.svg";
import Bg from "../../../assets/img/Bg/Heart.png";
import MobileBg from "../../../assets/img/Bg/MobileHeart.png";

import "./style.scss"

function Heart() {
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
        <div ref={ref} className={`services-heart ${isVisible ? "animate" : ""}`}>
            <img className="services-heart__bg" src={Bg} alt="bg" />
            <img className="services-heart__bg color" src={MobileBg} alt="bg" />
            <div className="services-heart__head">
                <h4 className="services-heart__title">Здоровая среда</h4>
                <img className="services-heart__icon" src={Icon} alt="icon" />
                <img
                    className="services-heart__icon color"
                    src={MobileIcon}
                    alt="icon"
                />
            </div>
            <p className="services-heart__text">
                День здорового ребёнка — это специально отведённое время для
                родителей и малышей без признаков болезни, когда проводятся
                плановые и профилактические визиты. Врач и родители могут
                обсудить вопросы развития, питания и вовремя выявлять возможные
                патологии — всё в спокойной и безопасной атмосфере.
            </p>

            <div className="services-heart__info">
                <button className="services-heart__btn">Подробнее</button>
                <span className="services-heart__time">с 9:00 до 13:00</span>
            </div>
        </div>
    );
}

export default Heart;
