import React from "react";
import Icon from "../../../assets/icon/Services/Heart/icon.svg";
import MobileIcon from "../../../assets/icon/Services/Heart/mobileIcon.svg";
import Bg from "../../../assets/img/Bg/Heart.png";
import MobileBg from "../../../assets/img/Bg/MobileHeart.png";

function Heart() {
    return (
        <div className="services-heart">
            {window.innerWidth >= 700 ? (
                <img className="services-heart__bg" src={Bg} alt="bg" />
            ) : (
                <img className="services-heart__bg" src={MobileBg} alt="bg" />
            )}
            <div className="services-heart__head">
                <h4 className="services-heart__title">Здоровая среда</h4>
                {window.innerWidth >= 700 ? (
                    <img src={Icon} alt="icon" />
                ) : (
                    <img src={MobileIcon} alt="icon" />
                )}
            </div>
            <p className="services-heart__text">
                День здорового ребёнка — это специально отведённое время для
                родителей и малышей без признаков болезни, когда проводятся
                плановые и профилактические визиты. Врач и родители могут
                обсудить вопросы развития, питания и вовремя выявлять возможные
                патологии — всё в спокойной и безопасной атмосфере.
            </p>

            <div className="services-heart__info">
                <button className="services-heart__btn">Подробнее</button>
                <span className="services-heart__time">с 9:00 до 13:00</span>
            </div>
        </div>
    );
}

export default Heart;
