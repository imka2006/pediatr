import React, { useState, useEffect } from "react";
import { IMaskInput } from "react-imask";

import Arrow from "../../../assets/icon/Modal/Arrow.svg";
import Close from "../../../assets/icon/Modal/Close.svg";
import Whatsapp from "../../../assets/icon/Right/Whatsapp.svg";
import Logo from "../../../assets/icon/Header/logo.svg";
import Bg from "../../../assets/img/Bg/Modal.png";

function Record({ setModal, setCalendar, finishDate, setFinal }) {
    const [isActive, setIsActive] = useState(localStorage.getItem("specialist") || "Выберите врача");
    const [isShow, setShow] = useState(false);
    const [name, setName] = useState(localStorage.getItem("name") || "");
    const [phone, setPhone] = useState(localStorage.getItem("phone") || "");

    const list = ["Педиатр", "Детский уролог", "Детский невролог", "Неонатолог"];

    // сохраняем данные в localStorage при каждом изменении
    useEffect(() => {
        if (finishDate && finishDate.length > 0) {
            localStorage.setItem("finishDate", JSON.stringify(finishDate));
        }
    }, [finishDate]);

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem("phone", phone);
    }, [phone]);

    useEffect(() => {
        localStorage.setItem("specialist", isActive);
    }, [isActive]);

    // очистка
    const handleSubmit = () => {
        // можно добавить валидацию тут

        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        localStorage.removeItem("specialist");

        setName("");
        setPhone("");
        setIsActive("Выберите врача");

        localStorage.removeItem("finishDate");
        setFinal(true)
    };

    return (
        <form className="modal-record">
            <img
                src={Close}
                alt="Закрыть"
                className="modal-record__close"
                onClick={() => setModal(false)}
            />
            <h2 className="modal-record__title">Записаться на прием</h2>

            <div className="modal-record__wrapper">
                <label className="modal-record__label acardeon another" onClick={() => setShow(!isShow)}>
                    {isActive}
                    <img src={Arrow} alt="Стрелка" />
                    {isShow && (
                        <ul className="modal-record__list">
                            {list.map(item => (
                                <li onClick={() => setIsActive(item)} key={item}>{item}</li>
                            ))}
                        </ul>
                    )}
                </label>

                <label className="modal-record__label">
                    <input
                        type="text"
                        placeholder="Имя*"
                        className="modal-record__input"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>

            <div className="modal-record__wrapper">
                <label className="modal-record__label acardeon" onClick={() => setCalendar(true)}>
                  {!finishDate || finishDate.length === 0
                        ? (() => {
                            const stored = JSON.parse(localStorage.getItem("finishDate"));
                            return stored && stored.length ? stored[0].slice(0, 25) : "Выберите дату и время";
                        })()
                        : <div>{finishDate[0].slice(0, 25)}</div>
                    }
                    <img src={Arrow} alt="Стрелка" />
                </label>

                <label className="modal-record__label">
                    <IMaskInput
                        mask="+{996} (000) 00-00-00"
                        placeholder="Телефон*"
                        className="modal-record__input"
                        value={phone}
                        required
                        onAccept={(value) => setPhone(value)}
                    />
                </label>
            </div>

            <div className="modal-record__info">
                <button className="modal-record__btn" onClick={handleSubmit}>Отправить</button>
                <p className="modal-record__text">
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных
                </p>
            </div>

            <div className="modal-record__call">
                Записаться по телефону:
                <a href="tel:+996508766555" className="modal-record__phone">0 508 766 555</a>
                <a href="tel:+996550766555" className="modal-record__phone">0 550 766 555</a>
            </div>

            <div className="modal-record__bott">
                <a href="#" className="modal-record__watsapp" target="_blank" rel="noopener noreferrer">
                    <img src={Whatsapp} alt="Whatsapp" />
                </a>
                <img src={Logo} alt="Логотип" />
                <img src={Bg} alt="" className="modal-record__bg" />
            </div>
        </form>
    );
}

export default Record;
