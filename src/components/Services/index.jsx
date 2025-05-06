import React from "react";
import Heart from "./Heart";
import Diagnosis from "./Diagnosis";
import Sub from "./Sub";
import List from "../List";

import Consultation from "../../assets/icon/Services/Price/Consultation.svg"
import Drip from "../../assets/icon/Services/Price/Drip.svg"
import Injection from "../../assets/icon/Services/Price/Injection.svg"
import Inhalation from "../../assets/icon/Services/Price/Inhalation.svg"
import Blood from "../../assets/icon/Services/Price/Blood.svg"

import "./style.scss";

function Services() {

    const list = [
        {
            id:0,
            img: Consultation,
            name:"Консультация врача",
            text:"",
            price:950
        },
        {
            id:1,
            img: Drip,
            name:"Капельницы",
            text:"Опытные медсестры ставят капельницу детям с 1 месяца",
            price:350
        },
        {
            id:2,
            img: Injection,
            name:"Инъекции (уколы)",
            text:"Внутривенно, внутримышечно, подкожно детям с 1 месяца",
            price:100
        },
        {
            id:3,
            img: Inhalation,
            name:"Ингаляции",
            text:"Специальные детские ингаляторы, бесшумные, портативные",
            price:150
        },
        {
            id:4,
            img: Blood,
            name:"Взятие анализов крови",
            text:"Специальные детские ингаляторы, бесшумные, портативные",
            price:150
        },
    ]

    return (
        <>
            <section className="services">
                <div className="container">
                    <div className="services-content">
                        <div className="services-wrapper">
                            <div className="services-inner">
                                <Heart />
                                <Diagnosis />
                            </div>
                            <Sub />
                        </div>
                        {window.innerWidth >= 700 ? (
                            <List items={list} animation={false} title="Стоимость услуг" />
                        ) : (
                            <></>
                        )}
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
