import React, { useEffect, useRef, useState } from "react";

import First from "../../../assets/icon/Doc/First.svg";
import Second from "../../../assets/icon/Doc/Second.svg";
import BgMb from "../../../assets/img/Bg/MobileDiagnosis.png";
import Bg from "../../../assets/img/Bg/Doc.png";

import "./style.scss";

function License() {
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
                className={`doc-license ${isVisible ? "animate" : ""}`}
            >
                <img src={Bg} className="doc-license__bg" alt="bg" />
                <img src={BgMb} className="doc-license__bg color" alt="bg" />
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
