import React from "react";
import Icon from "../../../assets/icon/Services/Diagnosis/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Diagnosis/MobileIcon.svg";
import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/Diagnosis.png";
import MobileBg from "../../../assets/img/Bg/MobileDiagnosis.png";

function Diagnosis() {
    return (
        <div className="services-diagnosis">
            {window.innerWidth >= 700 ? (
                <img className="services-diagnosis__bg" src={Bg} alt="bg" />
            ) : (
                <img
                    className="services-diagnosis__bg"
                    src={MobileBg}
                    alt="bg"
                />
            )}
            <div className="services-diagnosis__head">
                <h4 className="services-diagnosis__title">
                    Мы ставим точные диагнозы
                </h4>
                {window.innerWidth >= 700 ? (
                    <img src={Icon} alt="icon" />
                ) : (
                    <img src={MobileIcon} alt="icon" />
                )}
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
