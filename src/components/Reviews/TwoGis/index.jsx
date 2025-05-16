import React, { useEffect } from "react";
import AOS from "aos";

import BigStar from "../../../assets/icon/Reviews/BigStar.svg";
import Bg from "../../../assets/img/Bg/TwoGis.webp";

import "./style.scss";
import "aos/dist/aos.css";

function TwoGis() {
    const isMobile = window.innerWidth <= 700;

   useEffect(() => {
           AOS.init();
       }, []);

    return (
        <div className="reviews-main reviews-block" data-aos="fade-up">
            <img
                className="reviews-main__bg"
                data-aos={isMobile ? "fade-up-left" : ""}
                src={Bg}
                alt="bg"
            />

            <h3 className="reviews-main__title">
                Отзывы <span>2Gis</span>
            </h3>
            <div className="reviews-main__grade">4.9</div>
            <div className="reviews-main__counter">203 оценки</div>
            <div className="reviews-main__star">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src={BigStar} alt="star" />
                ))}
            </div>
        </div>
    );
}

export default TwoGis;
