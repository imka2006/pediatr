import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';

import Icon from "../../../assets/icon/Services/Heart/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Heart/MobileIcon.svg";
import MobileBg from "../../../assets/img/Bg/MobileHeart.png";

import "./style.scss";
import 'aos/dist/aos.css';

// AOS.init();

function Heart() {
    const itemRef = useRef(null); // Для анимации самого блока
    const imgRef = useRef(null);  // Для анимации фона

    const [subAnimated, setSubAnimated] = useState(false); // Для анимации блока
    const isMobile = window.innerWidth <= 700;

    // Анимация блока — один раз
    // useEffect(() => {
    //     const node = itemRef.current;
    //     if (!node || subAnimated) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 setSubAnimated(true);
    //                 observer.disconnect();
    //             }
    //         },
    //         {
    //             threshold: 0.3,
    //             rootMargin: "0px 0px 0px -0px",
    //         }
    //     );

    //     observer.observe(node);
    //     return () => observer.disconnect();
    // }, [subAnimated]);

    // // Анимация фона — один раз, без дёрганий
    // useEffect(() => {
    //     const node = imgRef.current;
    //     if (!node || !isMobile) return;

    //     let animated = false;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting && !animated) {
    //                 node.classList.add("animate");
    //                 animated = true;
    //                 observer.disconnect();
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
        <div
            // ref={itemRef}
            className={`services-heart `}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
        >
            {
                isMobile ? (
                    <img
                    ref={imgRef} 
                    data-aos="fade-down-right"
                    className={`services-heart__bg`}
                    src={MobileBg}
                    alt="bg"
                />
                ) : (
                    <img
                    className={`services-heart__bg`}
                    src={MobileBg}
                    alt="bg"
                />
                )
            }
           
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
