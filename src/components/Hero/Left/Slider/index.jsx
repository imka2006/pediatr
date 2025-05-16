import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import Aygerim from "../../../../assets/img/left/Slider/aygerim.png";
import Inst from "../../../../assets/icon/Left/Slider/inst.svg";
import Commas from "../../../../assets/icon/Left/Slider/commas.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "aos/dist/aos.css";

import "./style.scss";

const doctorsData = {
  "Педиатр": [
    {
      id: 0,
      name: "Аббасова Айгерим Аббасовна",
      category: "Педиатр",
      exp: "5 лет+",
      price: "950",
      text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами.",
    },
    {
      id: 1,
      name: "Ыманбекова Даткайым Акылбековна",
      category: "Педиатр",
      exp: "8 лет+",
      price: "1000",
      text: "...",
    },
  ],
  "Детский невролог": [
    {
      id: 0,
      name: "Ыманбекова Даткайым Акылбековна",
      category: "Детский невролог",
      exp: "8 лет+",
      price: "1000",
      text: "Для меня важно не только здоровье пациента, но и его спокойствие.",
    },
    {
      id: 1,
      name: "Ыманбекова Даткайым Акылбековна",
      category: "Детский невролог",
      exp: "8 лет+",
      price: "1000",
      text: "Для меня важно не только здоровье пациента, но и его спокойствие.",
    },
  ],
  "Детский уролог": [
    {
      id: 0,
      name: "Князев Игорь Алексеевич",
      category: "Детский уролог",
      exp: "5 лет+",
      price: "1000",
      text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами.",
    },
    {
      id: 1,
      name: "Князев Игорь Алексеевич",
      category: "Детский уролог",
      exp: "5 лет+",
      price: "1000",
      text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами.",
    },
  ],
  "Неонатолог": [
    {
      id: 0,
      name: "Ахметова Аида Ибраимовна",
      category: "Неонатолог",
      exp: "3 лет+",
      price: "1000",
      text: "Я не просто назначаю лекарства — я создаю будущее без болезней.",
    },
    {
      id: 1,
      name: "Ахметова Аида Ибраимовна",
      category: "Неонатолог",
      exp: "3 лет+",
      price: "1000",
      text: "Я не просто назначаю лекарства — я создаю будущее без болезней.",
    },
  ],
};

function Slider({ selectedTab }) {
  const swiperRef = useRef(null);

  const currentData = doctorsData[selectedTab] || doctorsData["Педиатр"];

  useEffect(() => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.slideTo(0);
  }, [selectedTab]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero-swiper" data-aos="fade-up">
      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        pagination
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="hero-slider"
      >
        {currentData.map(({ id, name, category, exp, price, text }) => (
          <SwiperSlide key={id}>
            <div className="hero-swiper__block">
              <img src={Aygerim} className="hero-swiper__photo" alt={name} />
              <div className="hero-swiper__info">
                <h4 className="hero-swiper__name">{name}</h4>
                <div className="hero-swiper__item">
                  <a href="https://www.instagram.com/kendricklamar/" target="_blank" rel="noreferrer" className="hero-swiper__inst">
                    <img src={Inst} alt="inst" />
                    {category}
                  </a>
                  <div className="hero-swiper__exp">{exp}</div>
                </div>
                <div className="hero-swiper__price">Приём {price} сом</div>
              </div>
              <p className="hero-swiper__text">
                <img src={Commas} alt="commas" />
                {text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
