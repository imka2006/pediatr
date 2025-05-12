import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';

import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/Sub.png";
import BgMg from "../../../assets/img/Bg/MobileSub.png";

import "./style.scss";

import 'aos/dist/aos.css';
function Sub() {
    const list = [
        "Личный врач на связи",
        "Внеочередная запись",
        "Доступен - Выезд на дом",
        "Персональные план наблюдения",
    ];
    const itemRef = useRef(null);
        const imgRef = useRef(null);
    
        const [subAnimated, setSubAnimated] = useState(false);
        const isMobile = window.innerWidth <= 700;

    //  useEffect(() => {
    //         const node = itemRef.current;
    //         if (!node || subAnimated) return;
    
    //         const observer = new IntersectionObserver(
    //             ([entry]) => {
    //                 if (entry.isIntersecting) {
    //                     setSubAnimated(true);
    //                     observer.disconnect(); // один раз
    //                 }
    //             },
    //             {
    //                 threshold: 0.3,
    //                 rootMargin: "-10% 0px 0px 0px", // отступ под хедер
    //             }
    //         );
    
    //         observer.observe(node);
    //         return () => observer.disconnect();
    //     }, [subAnimated]);
    
    //     // ⬇️ Анимация фона — каждый раз, когда входит в зону
    //     useEffect(() => {
    //         const node = imgRef.current;
    //         if (!node || !isMobile) return;
    
    //         const observer = new IntersectionObserver(
    //             ([entry]) => {
    //                 if (entry.isIntersecting) {
    //                     node.classList.add("animate");
    //                 } else {
    //                     node.classList.remove("animate");
    //                 }
    //             },
    //             {
    //                 threshold: 0.3,
    //             }
    //         );
    
    //         observer.observe(node);
    //         return () => observer.disconnect();
    //     }, [isMobile]);

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div ref={itemRef} className={`services-sub`} 
            data-aos="fade-up">
            {/* <img
                ref={imgRef}
                className={`services-sub__bg`}
                src={isMobile ? BgMg : Bg}
                alt="bg"
            /> */}
             {isMobile ? (
                            <img
                                className={`services-sub__bg`}
                                data-aos="fade-bottom"
                                src={BgMg}
                                alt="bg"
                            />
                        ) : (
                            <img className={`services-sub__bg`}  src={Bg} alt="bg" />
                        )}
            <div className="services-sub__wrapper">
                <h3 className="services-sub__title">Подписка 365</h3>
                <h4 className="services-sub__subtitle">“Доктор рядом”</h4>
                {!isMobile && (
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
            {isMobile && (
                <button className="services-sub__btn">Подробнее</button>
            )}
        </div>
    );
}

export default Sub;
