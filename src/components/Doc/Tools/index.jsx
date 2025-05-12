import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';

import Leandia from "../../../assets/img/Doc/Tools/Leandia.webp";
import Litmann from "../../../assets/img/Doc/Tools/Litmann.webp";
import Baxter from "../../../assets/img/Doc/Tools/Baxter.webp";
import Bg from "../../../assets/img/Bg/Tools.png";
import BgMb from "../../../assets/img/Bg/MobileTools.png";

import "./style.scss";
import 'aos/dist/aos.css';

function Tools() {
    const ref = useRef(null);
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

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div
                ref={ref}
                className={`doc-tools`}
            data-aos="fade-up"
            >{
                isMobile ? (
                    <img
                    data-aos="fade-down-right"
                    className={`doc-tools__bg`}
                    src={BgMb}
                    alt="bg"
                />
                ) : (
                    <img
                    className={`doc-tools__bg`}
                    src={Bg}
                    alt="bg"
                />
                )
            }
                <div className="doc-tools__wrapper">
                    <div className="doc-tools__content">
                        <h3 className="doc-tools__title">
                            Наши инструменты и оборудование
                        </h3>
                        <p className="doc-tools__text">
                            — эффективные и безопасные решения для здоровья
                            детей.
                        </p>
                    </div>
                    <img
                        className="doc-tools__img"
                        src={Leandia}
                        alt="leandia"
                    />
                </div>
                <div className="doc-tools__images">
                    <img src={Litmann} alt="Litmann" />
                    <img src={Baxter} alt="Baxter" />
                </div>
            </div>
        </>
    );
}

export default Tools;
