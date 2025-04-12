import React from "react";
import Parking from "../../../assets/icon/Right/Location/parking.svg";
import twoGis from "../../../assets/icon/Right/Location/twoGis.svg";
import googleMap from "../../../assets/icon/Right/Location/googleMap.svg";
import yandexMap from "../../../assets/icon/Right/Location/yandexMap.svg";

function Mobile() {
  return (
    <>
     <div className="hero-location">
     <h3 className="hero-schedule__title">График работы</h3>
                <ul className="hero-schedule__days">
                    
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">пн</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">вт</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">ср</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">чт</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item active">
                        <span className="hero-schedule__day">пт</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        <span className="hero-schedule__day">сб</span>
                        <span className="hero-schedule__separator"></span>
                        <span className="hero-schedule__hours">10 – 18</span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day sunday">вс</span>
                        <span className="hero-schedule__separator sunday"></span>
                        <span className="hours">выходной</span>
                    </li>
                    <li className="hero-schedule__bigtime hero-schedule__hours">9-21</li>
                </ul>
                <p className="hero-schedule__note"> Принимаем строго по записи! </p>


    
                    <h4 className="hero-location__name">
                        ул. Орозбекова 112, г. Бишкек
                    </h4>
                    <p className="hero-location__text">
                        риентир пересекает ул. Фрунзе, напротив СШ №27
                    </p>
                    <div className="hero-location__content">
                        <button className="hero-location__btn">
                            Открыть карту
                        </button>
                        <a href="#" className="hero-location__link">
                            <img src={twoGis} alt="twoGis" />
                        </a>
                        <a href="#" className="hero-location__link">
                            <img src={googleMap} alt="googleMap" />
                        </a>
                        <a href="#" className="hero-location__link">
                            <img src={yandexMap} alt="yandexMap" />
                        </a>
                    </div>
                </div>
    </>
  )
}

export default Mobile