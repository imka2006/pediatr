import React from "react";
import "../style.scss"

function Schedule() {
    return (
        <>
            <div className="hero-schedule">
                
                <h3 className="hero-schedule__title">График работы</h3>
                <div className="hero-schedule__status">
                    
                    <span className="hero-schedule__dot"></span>
                    Сейчас открыто
                </div>
                <ul className="hero-schedule__days">
                    
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">пн</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">вт</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">ср</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day">чт</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item active">
                        <span className="hero-schedule__day">пт</span>
                        <span className="hero-schedule__separator"></span>
                    </li>
                    <li className="hero-schedule__item">
                        <span className="hero-schedule__day">сб</span>
                        <span className="hero-schedule__separator"></span>
                        <span className="hero-schedule__hours">10 – 18</span>
                    </li>
                    <li className="hero-schedule__item">
                        
                        <span className="hero-schedule__day sunday">вс</span>
                        <span className="hero-schedule__separator sunday"></span>
                        <span className="hours">выходной</span>
                    </li>
                    <li className="hero-schedule__bigtime hero-schedule__hours">9-21</li>
                </ul>
                <p className="hero-schedule__note"> Принимаем строго по записи! </p>
            </div>
        </>
    );
}

export default Schedule;
