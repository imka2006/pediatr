import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import Aygerim from "../../../../assets/img/Hero/left/Slider/Aygerim.webp";
import Jyldyz from "../../../../assets/img/Hero/left/Slider/Jyldyz.webp";
import Alina from "../../../../assets/img/Hero/left/Slider/Alina.webp";
import Adinai from "../../../../assets/img/Hero/left/Slider/Adinai.webp";
import Bekmamat from "../../../../assets/img/Hero/left/Slider/Bekmamat.webp";
import Isulu from "../../../../assets/img/Hero/left/Slider/Isulu.webp";
import ww from "../../../../assets/img/Hero/left/Slider/Aidnai.jpg";

import Datkaym from "../../../../assets/img/Hero/left/Slider/Datkaym.webp";

import Igor from "../../../../assets/img/Hero/left/Slider/Igor.webp";

import Aida from "../../../../assets/img/Hero/left/Slider/Aida.webp";

import Inst from "../../../../assets/icon/Hero/Left/Slider/inst.svg";
import Commas from "../../../../assets/icon/Hero/Left/Slider/commas.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "aos/dist/aos.css";

import "./style.scss";

const doctorsData = {
    Педиатр: [
        {
            id: 99,
            img: ww,
            name: "Аббасова Айгерим Аббасовна",
            exp: "5 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "950",
            text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами.",
        },
        {
            id: 0,
            img: Aygerim,
            name: "Аббасова Айгерим Аббасовна",
            exp: "5 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "950",
            text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами.",
        },
        {
            id: 1,
            img: Jyldyz,
            name: "Тынарбекова Жылдыз Эмилбековна",
            exp: "5 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "950",
            text: "Я не просто назначаю лекарства — я создаю будущее без болезней.",
        },
        {
            id: 2,
            img: Alina,
            name: "Адылбекова Алина Адылбековна",
            exp: "7 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "950",
            text: "Моя задача — не просто лечить, а помогать расти здоровыми и счастливыми.",
        },
        {
            id: 3,
            img: Adinai,
            name: "Кулушова Адинай Канаатовна",
            exp: "3 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "950",
            text: "Я не просто назначаю лекарства — я создаю будущее без болезней.",
        },
        {
            id: 4,
            img: Bekmamat,
            name: "Бекмамат Сурап уулу",
            category: "/ Терапевт",
            exp: "6 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "950",
            text: "Для меня важно не только здоровье пациента, но и его спокойствие.",
        },
        {
            id: 5,
            img: Isulu,
            name: "Исаева Айсулуу Камиловна",
            exp: "5 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "1400",
            text: "Для меня важно не только здоровье пациента, но и его спокойствие.",
        },
    ],
    "Детский невролог": [
        {
            id: 0,
            img: Datkaym,
            name: "Ыманбекова Даткайым Акылбековна",
            exp: "8 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "1000",
            text: "Для меня важно не только здоровье пациента, но и его спокойствие.",
        },
    ],
    "Детский уролог": [
        {
            id: 0,
            img: Igor,
            name: "Князев Игорь Алексеевич",
            exp: "5 лет+",
            link: "https://www.instagram.com/kendricklamar/",
            price: "1000",
            text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами.",
        },
    ],
    Неонатолог: [
        {
            id: 0,
            img: Aida,
            name: "Ахметова Аида Ибраимовна",
            exp: "3 лет+",
            link: "https://www.instagram.com/kendricklamar/",
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
                {currentData?.length > 0 &&
                    currentData.map(
                        ({
                            id,
                            name,
                            category,
                            exp,
                            price,
                            text,
                            img,
                            link,
                        }) => (
                            <SwiperSlide key={id}>
                                <div className="hero-swiper__block">
                                    <img
                                        src={img}
                                        className="hero-swiper__photo"
                                        alt={name}
                                    />
                                    <div className="hero-swiper__info">
                                        <h4 className="hero-swiper__name">
                                            {name}
                                        </h4>
                                        <div className="hero-swiper__item">
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="hero-swiper__inst"
                                            >
                                                <img src={Inst} alt="inst" />
                                                {selectedTab}
                                                {category
                                                    ? ` / ${category.replace(
                                                          /^\/\s*/,
                                                          ""
                                                      )}`
                                                    : ""}
                                            </a>

                                            <div className="hero-swiper__exp">
                                                {exp}
                                            </div>
                                        </div>
                                        <div className="hero-swiper__price">
                                            Приём {price} сом
                                        </div>
                                    </div>
                                    <p className="hero-swiper__text">
                                        <img src={Commas} alt="commas" />
                                        {text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    )}
            </Swiper>
        </div>
    );
}

export default Slider;
