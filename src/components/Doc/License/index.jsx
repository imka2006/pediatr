import React, { useEffect, useRef, useState } from "react";

import First from "../../../assets/icon/Doc/First.svg";
import Second from "../../../assets/icon/Doc/Second.svg";
import BgMb from "../../../assets/img/Bg/MobileDiagnosis.png";
import Bg from "../../../assets/img/Bg/Doc.png";

import "./style.scss"

function License() {
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
            <div ref={ref} className={`doc-license ${isVisible ? "animate" : ""}`}>
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
