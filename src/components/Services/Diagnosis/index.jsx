import React, { useEffect, useState } from "react";
import AOS from "aos";

import Form from "../../Form";

import Icon from "../../../assets/icon/Services/Diagnosis/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Diagnosis/MobileIcon.svg";
import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/MobileDiagnosis.webp";

import "./style.scss";
import "aos/dist/aos.css";

function Diagnosis() {
    const isMobile = window.innerWidth <= 700;
    const [form, setForm] = useState(false)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div
                className="services-diagnosis"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <img
                    className="services-diagnosis__bg"
                    src={Bg}
                    alt="bg"
                    data-aos={isMobile ? "fade-down-right" : undefined}
                />

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

                <button className="services-diagnosis__btn" onClick={() => setForm(true)}>Подробнее</button>
            </div>
           {form && <Form title="Мы ставим точные диагнозы" setForm={setForm}/>}
        </>
    );
}

export default Diagnosis;
