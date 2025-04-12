import React from "react";
import  Watsapp from "../../../assets/icon/Right/watsapp.svg"
import Bg from "../../../assets/img/Bg/Hero.png"

function Top() {
    return (
        <>
        <div className="hero-top">
        <img className='hero-top__bg' src={Bg} alt="bg" />
            <h1 className="hero-top__title">Детский центр доказательной медицины <span>«Мама Доктор»</span></h1>
            <p className="hero-top__text"><span>"Доказательный педиатр"</span> - это ОТВЕТСТВЕННЫЙ подход к ЗДОРОВЬЮ ребенка.</p>
            <div className="hero-top__info">
                <button className="hero-top__btn btn-active">Записаться</button>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src={Watsapp} alt="Watsapp" /></a>
            </div>
        </div>
        </>
    );
}

export default Top;
