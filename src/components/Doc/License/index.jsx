import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

import First from "../../../assets/img/Doc/License/First.webp";
import Second from "../../../assets/img/Doc/License/Second.webp";
import Bg from "../../../assets/img/Bg/License.png";
import BgMb from "../../../assets/img/Bg/MobileLicense.png";

import "./style.scss";
import "aos/dist/aos.css";

function License() {
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
            <div className={`doc-license`} data-aos="fade-up">
                {isMobile ? (
                    <img
                        data-aos="fade-down-left"
                        className={`doc-license__bg`}
                        src={BgMb}
                        alt="bg"
                    />
                ) : (
                    <img src={Bg} className="doc-license__bg" alt="bg" />
                )}
                <div className="doc-license__content">
                    <h3 className="doc-license__title">
                        Наши лицензии и сертификаты
                    </h3>
                    <p className="doc-license__text">
                        Вы можете быть уверены, что ваш ребенок в надежных
                        руках, а наша клиника работает в полном соответствии с
                        законодательством и медицинскими нормами.
                    </p>
                </div>
                <div className="doc-license__images">
                    <img src={First} alt="license" />
                    <img src={Second} alt="license" />
                </div>
            </div>
        </>
    );
}

export default License;
