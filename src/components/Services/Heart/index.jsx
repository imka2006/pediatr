import React, { useEffect, useState } from "react";
import AOS from "aos";

import Form from "../../Form";

import Icon from "../../../assets/icon/Services/Heart/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Heart/MobileIcon.svg";
import MobileBg from "../../../assets/img/Bg/MobileHeart.webp";

import "./style.scss";
import "aos/dist/aos.css";

function Heart() {
    const isMobile = window.innerWidth <= 700;
    const [form,setForm] = useState(false)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div
                className="services-heart"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                <img
                    className="services-heart__bg"
                    src={MobileBg}
                    alt="bg"
                    {...(isMobile && { "data-aos": "fade-down-right" })}
                />

                <div className="services-heart__head">
                    <h4 className="services-heart__title">Здоровая среда</h4>
                    <img
                        className="services-heart__icon"
                        src={Icon}
                        alt="icon"
                    />
                    <img
                        className="services-heart__icon color"
                        src={MobileIcon}
                        alt="icon"
                    />
                </div>

                <p className="services-heart__text">
                    День здорового ребёнка — это специально отведённое время для
                    родителей и малышей без признаков болезни, когда проводятся
                    плановые и профилактические визиты. Врач и родители могут
                    обсудить вопросы развития, питания и вовремя выявлять
                    возможные патологии — всё в спокойной и безопасной
                    атмосфере.
                </p>

                <div className="services-heart__info">
                    <button className="services-heart__btn" onClick={() => setForm(true)}>Подробнее</button>
                    <span className="services-heart__time">
                        с 9:00 до 13:00
                    </span>
                </div>
            </div>
            {form && <Form title="Здоровая среда" setForm={setForm}/>}
        </>
    );
}

export default Heart;
