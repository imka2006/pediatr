import React from "react";
import Arrow from "../../../assets/icon/Modal/Arrow.svg";
import Close from "../../../assets/icon/Modal/Close.svg";
import Whatsapp from "../../../assets/icon/Right/Whatsapp.svg";
import Logo from "../../../assets/icon/Header/Logo.svg";
import Bg from "../../../assets/img/Bg/modal.png";

function Record() {
    return (
        <div className="modal-record">
            <img src={Close} className="modal-record__close" alt="close" />
            <h2 className="modal-record__title">Записаться на прием</h2>
            <div className="modal-record__wrapper">
                <label className="modal-record__label acardeon">
                    Выберите врача
                    <img src={Arrow} alt="Arrow" />
                </label>
                <label className="modal-record__label">
                    <input
                        type="text"
                        placeholder="Имя*"
                        className="modal-record__input"
                    />
                </label>
            </div>
            <div className="modal-record__wrapper">
                <label className="modal-record__label acardeon">
                    Выберите дату и время
                    <img src={Arrow} alt="Arrow" />
                </label>
                <label className="modal-record__label">
                    <input
                        type="number"
                        placeholder="Телефон*"
                        className="modal-record__input"
                    />
                </label>
            </div>
            <div className="modal-record__info">
                <button className="modal-record__btn">Отправить</button>
                <p className="modal-record__text">
                    Нажимая на кнопку, вы даете согласие на обработку
                    персональных данных
                </p>
            </div>
            <div className="modal-record__call" >
                Записаться по телефону
                <a href="tel:+996508766555" className="modal-record__phone">
                    0 508 766 555
                </a>
                <a href="tel:+996550766555" className="modal-record__phone">
                    0 550 766 555
                </a>
            </div>
            <div className="modal-record__bott">
                <a
                    href="#"
                    className="modal-record__watsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Whatsapp} alt="Whatsapp" />
                </a>
                <img src={Logo} alt="logo" />
                <img src={Bg} className="modal-record__bg" alt="" />
            </div>
        </div>
    );
}

export default Record;
