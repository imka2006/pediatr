import React from "react";
import Leandia from "../../../assets/img/Doc/Leandia.png";
import Litmann from "../../../assets/img/Doc/Litmann.png";
import Baxter from "../../../assets/img/Doc/Baxter.png";

function Tools() {
    return (
        <>
            <div className="doc-tools">
                <div className="doc-tools__wrapper">
                    <div className="doc-tools__content">
                        <h3 className="doc-tools__title">
                            Наши инструменты и оборудование
                        </h3>
                        <p className="doc-tools__text">
                            — эффективные и безопасные решения для здоровья
                            детей.
                        </p>
                    </div>
                    <img className="doc-tools__img" src={Leandia} alt="leandia" />
                </div>
                <div className="doc-tools__images">
                    <img src={Litmann} alt="Litmann" />
                    <img src={Baxter} alt="Baxter" />
                </div>
            </div>
        </>
    );
}

export default Tools;
