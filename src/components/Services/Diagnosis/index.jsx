import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import Icon from "../../../assets/icon/Services/Diagnosis/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Diagnosis/MobileIcon.svg";
import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/MobileDiagnosis.png";

import "./style.scss";
import 'aos/dist/aos.css';

function Diagnosis() {
    const ref = useRef(null);
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = window.innerWidth <= 700;

    // useEffect(() => {
    //     const node = ref.current;
    //     if (!node) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //                 observer.disconnect(); // полностью отключаем наблюдателя
    //             }
    //         },
    //         { threshold: 0.3 }
    //     );

    //     observer.observe(node);

    //     return () => {
    //         observer.disconnect(); // на случай размонтирования
    //     };
    // }, []);

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
        <div
            ref={ref}
            className={`services-diagnosis`}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
        >
             {
                            isMobile ? (
                                <img
                                data-aos="fade-down-right"
                                className={`services-diagnosis__bg`}
                                src={Bg}
                                alt="bg"
                            />
                            ) : (
                                <img
                                className={`services-diagnosis__bg`}
                                src={Bg}
                                alt="bg"
                            />
                            )
                        }
            
            <div className="services-diagnosis__head">
                <h4 className="services-diagnosis__title">
                    Мы ставим точные диагнозы
                </h4>
                <img
                    className="services-diagnosis__icon"
                    src={Icon}
                    alt="icon"
                />
                <img
                    className="services-diagnosis__icon color"
                    src={MobileIcon}
                    alt="icon"
                />
            </div>
            <p className="services-diagnosis__text">
                Быстрая диагностика за <span>5 минут</span>
            </p>

            <ul className="services-diagnosis__list">
                <li className="services-diagnosis__item">
                    <img src={Check} alt="check" /> Мультитест на вирусы
                </li>
                <li className="services-diagnosis__item">
                    <img src={Check} alt="check" /> Общий анализ крови
                </li>
                <li className="services-diagnosis__item">
                    <img src={Check} alt="check" /> Ферритин, дефицит железа
                </li>
                <li className="services-diagnosis__item">
                    <img src={Check} alt="check" /> Витамин Д3
                </li>
            </ul>

            <button className="services-diagnosis__btn">Подробнее</button>
        </div>
    );
}

export default Diagnosis;
