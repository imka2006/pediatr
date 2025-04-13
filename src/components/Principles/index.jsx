import React from "react";
import Post from "../Post";
import List from "../List";
import First from "../../assets/img/Principles/First.png";
import Second from "../../assets/img/Principles/Second.png";

import Queue from "../../assets/icon/Principles/List/Queue.svg";
import Conect from "../../assets/icon/Principles/List/Conect.svg";
import Necessary from "../../assets/icon/Principles/List/Necessary.svg";
import Safety from "../../assets/icon/Principles/List/Safety.svg";



import Consultation from "../../assets/icon/Services/Price/Consultation.svg"
import Drip from "../../assets/icon/Services/Price/Drip.svg"
import Injection from "../../assets/icon/Services/Price/Injection.svg"
import Inhalation from "../../assets/icon/Services/Price/Inhalation.svg"
import Blood from "../../assets/icon/Services/Price/Blood.svg"

import "./style.scss";
function Principles() {
    const firstText =
        "Забота о вашем ребенке — наша главная цель! В нашей клинике работают опытные и заботливые врачи";
    const secondText =
        "Всем привет🙋🏻‍♀️. меня зовут Айгерим, на данный момент я являюсь действующим врачом-педиатром в клинике Мама";

    const list = [
        {
            id: 0,
            img: Queue,
            name: "Принимаем без очередей по записи",
            text: "Минимизируем количеством пациентов, одновременно находящихся в одном помещении.",
        },
        {
            id: 1,
            img: Conect,
            name: "Доктор остается с вами на связи",
            text: "В целях контроля ситуации Доктор ведет пациента до полного выздоровления или улучшение качества жизни при хронических заболеваниях.",
        },
        {
            id: 2,
            img: Necessary,
            name: "Назначаем только необходимое",
            text: "С доказанной эффективностью и безопасностью в соответствии с международными протоколами и стандартами и ничего лишнего.",
        },
        {
            id: 3,
            img: Safety,
            name: "Чистота и стерильность",
            text: "Одноразовые маски и перчатки, инструменты и простыни, обеззараживание и стерилизация воздуха в клинике, санитарная уборка, контроль здоровья персонала. Подготовка и дезинфекция кабинета перед каждым пациентом.",
        },
    ];

    const mobile = [
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
            <div className="principles">
                <div className="container">
                    <div className="principles-wrapper">
                        <div className="principles-content">
                            <Post img={First} text={firstText} link={"#"} />
                            <Post img={Second} text={secondText} link={"#"} />
                            {window.innerWidth >= 685 &&
                            window.innerWidth < 1115 ? (
                                <Post img={First} text={secondText} link="#" />
                            ) : null}
                            {/* {window.innerWidth >= 1115 &&
                            window.innerWidth >= 685 ? (
                                <></>
                            ) : (
                                <>
                                    <Post
                                        img={First}
                                        text={firstText}
                                        link={"#"}
                                    />
                                </>
                            )} */}
                        </div>
                        {window.innerWidth < 700 ? (
                            <List items={mobile} title="Стоимость услуг" />
                        ) : (
                            <></>
                        )}
                        <List items={list} title="Основные принципы работы" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Principles;
