import React, { useState, useEffect } from "react";

import Arrow from "../../assets/icon/Modal/Arrow.svg";
import Close from "../../assets/icon/Modal/Close.svg";
import Whatsapp from "../../assets/icon/Blog/Whatsapp.webp";
import Logo from "../../assets/icon/Header/logo.svg";
import Bg from "../../assets/img/Bg/Modal.webp";

import "./style.scss";

function Form({title,setForm}) {
    return (
        <section className="modal">
            <div onClick={() => setForm(false)} className="modal-bg"></div>

            <div className="modal-wrapper">
                <form onSubmit="" className="modal-form">
                    <img
                        onClick={() => setForm(false)}
                        src={Close}
                        alt="Закрыть"
                        className="modal-form__close"
                    />
                    <h2 className="modal-form__title">{title}</h2>

                    <div className="modal-form__wrapper">
                        <label className="modal-form__label">
                            <input
                                type="text"
                                placeholder="Имя*"
                                className="modal-form__input"
                            />
                        </label>

                        <label className="modal-form__label">
                            <input
                                type="text"
                                placeholder="Имя*"
                                className="modal-form__input"
                            />
                        </label>
                    </div>

                    <div className="modal-form__info">
                        <button className="modal-form__btn">Отправить</button>
                        <p className="modal-form__text">
                            Нажимая на кнопку, вы даете согласие на обработку
                            персональных данных
                        </p>
                    </div>

                    <div className="modal-form__call">
                        Записаться по телефону:
                        <a
                            href="tel:+996508766555"
                            className="modal-form__phone"
                        >
                            0 508 766 555
                        </a>
                        <a
                            href="tel:+996550766555"
                            className="modal-form__phone"
                        >
                            0 550 766 555
                        </a>
                        <a
                            href="#"
                            className="modal-form__whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Whatsapp} alt="Whatsapp" />
                        </a>
                    </div>
                    <img src={Bg} alt="" className="modal-form__bg" />
                    <img
                        src={Logo}
                        className="modal-form__logo"
                        alt="Логотип"
                    />
                </form>
            </div>
        </section>
    );
}

export default Form;
