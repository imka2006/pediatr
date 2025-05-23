import React, { useEffect } from "react";
import AOS from "aos";

import Parking from "../../../../assets/icon/Hero/Right/Location/parking.svg";
import twoGis from "../../../../assets/icon/Hero/Right/Location/twoGis.svg";
import googleMap from "../../../../assets/icon/Hero/Right/Location/googleMap.svg";
import yandexMap from "../../../../assets/icon/Hero/Right/Location/yandexMap.svg";

import "./style.scss";
import "aos/dist/aos.css";

function Location() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero-location" data-aos="fade-up">
      {window.innerWidth > 888 && (
        <div className="hero-location__head">
          <h3 className="hero-location__title">Местоположение</h3>
          <span className="hero-location__info">
            <img src={Parking} alt="Parking" />
            Удобная парковка
          </span>
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.1484455747492!2d74.60349401505306!3d42.8821579090188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ab4e047231%3A0xb06cfaa483963836!2z0JzQsNC80LAg0JTQvtC60YLQvtGALCDQtNC10YLRgdC60LjQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGG0LXQvdGC0YAsINC_0LXQtNC40LDRgtGA!5e0!3m2!1sru!2skg!4v1744386732556!5m2!1sru!2skg"
        className="hero-location__map"
        loading="lazy"
        title="Google Map"
      ></iframe>

      <h4 className="hero-location__name">ул. Орозбекова 112, г. Бишкек</h4>
      <p className="hero-location__text">ориентир пересекает ул. Фрунзе, напротив СШ №27</p>

      <div className="hero-location__content">
        <a href="#" target="_blank" className="hero-location__btn">Открыть карту</a>
        <a href="#" target="_blank" className="hero-location__link" aria-label="2GIS">
          <img src={twoGis} alt="2GIS" />
        </a>
        <a href="#" target="_blank" className="hero-location__link" aria-label="Google Maps">
          <img src={googleMap} alt="Google Maps" />
        </a>
        <a href="#" target="_blank" className="hero-location__link" aria-label="Yandex Maps">
          <img src={yandexMap} alt="Yandex Maps" />
        </a>
      </div>
    </div>
  );
}

export default Location;