import React, { useEffect, useRef, useState } from "react";

import Leandia from "../../../assets/img/Doc/Leandia.png";
import Litmann from "../../../assets/img/Doc/Litmann.png";
import Baxter from "../../../assets/img/Doc/Baxter.png";
import BgMb from "../../../assets/img/Bg/MobileDiagnosis.png";
import Bg from "../../../assets/img/Bg/Doc.png";

import "./style.scss";

function Tools() {
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
            <div
                ref={ref}
                className={`doc-tools ${isVisible ? "animate" : ""}`}
            >
                <img src={Bg} className="doc-tools__bg" alt="bg" />
                <img src={BgMb} className="doc-tools__bg color" alt="bg" />
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
