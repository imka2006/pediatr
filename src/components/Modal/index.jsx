import React, { useState } from "react";

import Record from "./Record";
import Calendar from "./Calendar";
import Final from "./Final";

import "./style.scss";

function Modal({ setModal }) {
    const [calendar, setCalendar] = useState(false);
    const [finishDate, setFinishDate] = useState(null);

    const onClose = () => {
        if (calendar) setCalendar(false);
        if (!calendar) setModal(false);
    };

    return (
        <>
            <div className="modal">
                <div onClick={() => onClose()} className="modal-bg"></div>
                <div className="modal-wrapper">
                    {calendar ? (
                        <Calendar setFinishDate={setFinishDate} setCalendar={setCalendar}/>
                    ) : (
                        <Record
                            setModal={setModal}
                            finishDate={finishDate}
                            setCalendar={setCalendar}
                        />
                    )}
                    {/* <Final /> */}
                </div>
            </div>
        </>
    );
}

export default Modal;
