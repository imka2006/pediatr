import React, { useState } from "react";

import Record from "./Record";
import Calendar from "./Calendar";
import Final from "./Final";

import "./style.scss";

function Modal({ setModal }) {
    const [calendar, setCalendar] = useState(false);
    const [final, setFinal] = useState(false);
    const [finishDate, setFinishDate] = useState(null);

    const onClose = () => {
        if (calendar) setCalendar(false);
        if (!calendar) setModal(false);
        if (final) setFinal(false)
    };

    return (
        <section className="modal">
            <div onClick={onClose} className="modal-bg"></div>
            <div className="modal-wrapper">
                {final ? (
                    <Final onClose={onClose} />
                ) : calendar ? (
                    <Calendar setFinishDate={setFinishDate} setCalendar={setCalendar} />
                ) : (
                    <Record
                        setModal={setModal}
                        finishDate={finishDate}
                        setCalendar={setCalendar}
                        setFinal={setFinal}
                    />
                )}
            </div>
        </section>
    );
}

export default Modal;
