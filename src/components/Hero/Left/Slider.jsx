import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Aygerim from "../../../assets/img/left/Slider/aygerim.png";
import Inst from "../../../assets/icon/Left/Slider/inst.svg";
import Commas from "../../../assets/icon/Left/Slider/commas.svg";

import TwoGis from "../../../assets/icon/Left/Slider/TwoGis.svg";
import Whatsapp from "../../../assets/icon/Left/Slider/Whatsapp.svg";
import Call from "../../../assets/icon/Left/Slider/Call.svg";



function Slider() {
    const swiperList = [
        {
          id: 0,
          name: "Дамиров Тимур Рафаэлович",
          img: Aygerim,
          text: "Моя работа — это не просто лечение, но и установление доверительных отношений с пациентами..",
          instagram: "https://www.instagram.com/kendricklamar/",
          exp: "8 лет+",
          price: "1200",
          category:"Педиатр"
        },
        {
          id: 1,
          name: "Сардарова Алиса Камилевна",
          img: Aygerim,
          text: "Здоровье ребёнка — это ответственность, которую я беру с гордостью и заботой.",
          instagram: "https://www.instagram.com/kendricklamar/",
          exp: "6 лет",
          price: "1000",
          category:"Педиатр"
        },
        {
          id: 2,
          name: "Мусаев Эмиль Шухратович",
          img: Aygerim,
          text: "Моя цель — создать атмосферу, в которой дети не боятся врачей.",
          instagram: "https://www.instagram.com/kendricklamar/",
          exp: "10 лет",
          price: "1500",
          category:"Педиатр"
        },
        {
          id: 3,
          name: "Ибраева Зарина Амановна",
          img: Aygerim,
          text: "Медицина — это не только наука, но и искусство слышать и понимать.",
          instagram: "https://www.instagram.com/kendricklamar/",
          exp: "7 лет",
          price: "1100",
          category:"Педиатр"
        },
        {
          id: 4,
          name: "Орозов Ринат Жантайевич",
          img: Aygerim,
          text: "Работаю с душой и сердцем, ведь каждый ребёнок — это мир.",
          instagram: "https://www.instagram.com/kendricklamar/",
          exp: "9 лет",
          price: "1300",
          category:"Педиатр"
        },
      ];
      

    return (
        <>
            <div className="hero-swiper">
            {
                                window.innerWidth <= 700 ? (
                                    <>
                                    <div className="hero-swiper__list">
                                        <li><a href="#" target="_blank" > <img src={TwoGis} alt="TwoGis" /></a></li>
                                        <li><a href="#" target="_blank" > <img src={Whatsapp} alt="Whatsapp" /></a></li>
                                        <li><a href="#" target="_blank" > <img src={Call} alt="Call" /></a></li>
                                    </div>
                                    
                                    </>
                                ) : (
                                    <></>
                                )
                            }
                <Swiper
                    pagination={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="hero-slider"

                >
                    {swiperList.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="hero-swiper__block">
                                <img src={item.img} className="hero-swiper__photo" alt="img" />
                                <div className="hero-swiper__info">
                                    <h4 className="hero-swiper__name">{item.name}</h4>
                                    <div className="hero-swiper__item">
                                        <a href={item.instagram} target="_blank" className="hero-swiper__inst"><img src={Inst} alt="inst" />{item.category}</a>
                                        <div className="hero-swiper__exp">{item.exp}</div>
                                    </div>
                                    <div className="hero-swiper__price">
                                        Приём {item.price} сом
                                    </div>
                                </div>
                            <p className="hero-swiper__text"><img src={Commas} alt="commas" /> {item.text}</p>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Slider;
