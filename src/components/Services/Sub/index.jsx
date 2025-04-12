import React from "react";

import Check from "../../../assets/icon/Services/Diagnosis/check.svg";
import Bg from "../../../assets/img/Bg/Sub.png";
import MobileBg from "../../../assets/img/Bg/MobileSub.png";

function Sub() {
    return (
        <>
            <div className="services-sub">
                {/* <img className="services-sub__bg" src={MobileBg} alt="bg" /> */}
                {window.innerWidth >= 700 ? (
                    <img className="services-sub__bg" src={Bg} alt="bg" />
                ) : (
                    <img
                        className="services-sub__bg "
                        src={MobileBg}
                        alt="bg"
                    />
                )}
                {/* <img className="services-sub__bg" src={Bg} alt="bg" /> */}
                <div className="services-sub__wrapper">
                    <h3 className="services-sub__title">Подписка 365</h3>
                    <h4 className="services-sub__subtitle">“Доктор рядом”</h4>
                    {window.innerWidth <= 700 ? (
                        <></>
                    ) : (
                        <button className="services-sub__btn">Подробнее</button>
                    )}
                </div>
                <ul className="services-sub__list">
                    <li className="services-sub__item">
                        <img src={Check} alt="check" /> Личный врач на связи
                    </li>
                    <li className="services-sub__item">
                        <img src={Check} alt="check" /> Внеочередная запись
                    </li>
                    <li className="services-sub__item">
                        <img src={Check} alt="check" /> Доступен - Выезд на дом
                    </li>
                    <li className="services-sub__item">
                        <img src={Check} alt="check" /> Персональные план
                        наблюдения
                    </li>
                </ul>
                {window.innerWidth <= 700 ? (
                    <button className="services-sub__btn">Подробнее</button>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Sub;
