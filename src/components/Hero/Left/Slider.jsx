import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import Aygerim from "../../../assets/img/left/Slider/aygerim.png";
import Inst from "../../../assets/icon/Left/Slider/inst.svg";
import Commas from "../../../assets/icon/Left/Slider/commas.svg";
import TwoGis from "../../../assets/icon/Left/Slider/TwoGis.svg";
import Whatsapp from "../../../assets/icon/Left/Slider/Whatsapp.svg";
import Call from "../../../assets/icon/Left/Slider/Call.svg";

function Slider({ selectedTab }) {
    const swiperRef = useRef(null);
    // Массивы отделяем по категориям
    const pediarts = [
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
    ];
    const childNeurologist = [
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
    ];
    const childUrologist = [
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
    ];
    const neonatologist = [
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
    ];

    // В зависимости от того, что выбрал пользователь, берём нужный массив
    let currentData = [];
    if (selectedTab === "Педиатр") currentData = pediarts;
    else if (selectedTab === "Детский невролог") currentData = childNeurologist;
    else if (selectedTab === "Детский уролог") currentData = childUrologist;
    else if (selectedTab === "Неонатолог") currentData = neonatologist;
    else currentData = pediarts;

    useEffect(() => {
        if (swiperRef.current?.swiper) {
          swiperRef.current.swiper.slideTo(0); // сбрасываем на 1 слайд
        }
      }, [selectedTab]);

    return (
        <div className="hero-swiper">
            {window.innerWidth <= 700 && (
                <div className="hero-swiper__list">
                    <li>
                        <a href="#" target="_blank">
                            <img src={TwoGis} alt="TwoGis" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src={Whatsapp} alt="Whatsapp" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src={Call} alt="Call" />
                        </a>
                    </li>
                </div>
            )}
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="hero-slider"
            >
                {currentData.map((item) => (
                    <SwiperSlide key={item.id} >
                        <div className="hero-swiper__block">
                            <img
                                src={Aygerim}
                                className="hero-swiper__photo"
                                alt="img"
                            />
                            <div className="hero-swiper__info">
                                <h4 className="hero-swiper__name">
                                    {item.name}
                                </h4>
                                <div className="hero-swiper__item">
                                    <a
                                        href="https://www.instagram.com/kendricklamar/"
                                        target="_blank"
                                        className="hero-swiper__inst"
                                    >
                                        <img src={Inst} alt="inst" />
                                        {item.category}
                                    </a>
                                    <div className="hero-swiper__exp">
                                        {item.exp}
                                    </div>
                                </div>
                                <div className="hero-swiper__price">
                                    Приём {item.price} сом
                                </div>
                            </div>
                            <p className="hero-swiper__text">
                                <img src={Commas} alt="commas" />
                                {item.text}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
