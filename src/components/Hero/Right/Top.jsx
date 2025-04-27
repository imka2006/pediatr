import React from "react";
import Whatsapp from "../../../assets/icon/Right/Whatsapp.svg";
import Bg from "../../../assets/img/Bg/Hero.png";
import Babe from "../../../assets/img/right/Top/Babe.png";
import Modal from "../../Modal";

function Top({setModal}) {
    return (
        <>
            <div className="hero-top">
                <img className="hero-top__bg" src={Bg} alt="bg" />
                <h1 className="hero-top__title">
                    Детский центр доказательной медицины
                    <span>«Мама Доктор»</span>
                </h1>
                <p className="hero-top__text">
                    <span>"Доказательный педиатр"</span> - это ОТВЕТСТВЕННЫЙ
                    подход к ЗДОРОВЬЮ ребенка.
                </p>
                <div className="hero-top__info">
                    <button onClick={() => setModal(true)} className="hero-top__btn btn-active">
                        Записаться
                    </button>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                </div>
                {window.innerWidth > 700 ? (
                    <img src={Babe} className="hero-top__babe" alt="babe" />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Top;
