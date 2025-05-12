import React from "react";
import Post from "../Post";
import List from "../List";
import First from "../../assets/img/Principles/First.png";
import Second from "../../assets/img/Principles/Second.png";

import Queue from "../../assets/icon/List/Queue.svg";
import Conect from "../../assets/icon/List/Conect.svg";
import Necessary from "../../assets/icon/List/Necessary.svg";
import Safety from "../../assets/icon/List/Safety.svg";

import bgQueue from "../../assets/icon/List/bgQueue.svg";
import bgConect from "../../assets/icon/List/bgConect.svg";
import bgNecessary from "../../assets/icon/List/bgNecessary.svg";
import bgSafety from "../../assets/icon/List/bgSafety.svg";

import Consultation from "../../assets/icon/Services/Price/Consultation.svg";
import Drip from "../../assets/icon/Services/Price/Drip.svg";
import Injection from "../../assets/icon/Services/Price/Injection.svg";
import Inhalation from "../../assets/icon/Services/Price/Inhalation.svg";
import Blood from "../../assets/icon/Services/Price/Blood.svg";

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
            bg: bgQueue,
            name: "Принимаем без очередей по записи",
            text: "Минимизируем количеством пациентов, одновременно находящихся в одном помещении.",
        },
        {
            id: 1,
            img: Conect,
            bg: bgConect,
            name: "Доктор остается с вами на связи",
            text: "В целях контроля ситуации Доктор ведет пациента до полного выздоровления или улучшение качества жизни при хронических заболеваниях.",
        },
        {
            id: 2,
            img: Necessary,
            bg: bgNecessary,
            name: "Назначаем только необходимое",
            text: "С доказанной эффективностью и безопасностью в соответствии с международными протоколами и стандартами и ничего лишнего.",
        },
        {
            id: 3,
            img: Safety,
            bg: bgSafety,
            name: "Чистота и стерильность",
            text: "Одноразовые маски и перчатки, инструменты и простыни, обеззараживание и стерилизация воздуха в клинике, санитарная уборка, контроль здоровья персонала. Подготовка и дезинфекция кабинета перед каждым пациентом.",
        },
    ];

    const mobile = [
        {
            id: 0,
            img: Consultation,
            bg: bgQueue,
            name: "Консультация врача",
            text: "",
            price: 950,
        },
        {
            id: 1,
            img: Drip,
            bg: bgConect,
            name: "Капельницы",
            text: "Опытные медсестры ставят капельницу детям с 1 месяца",
            price: 350,
        },
        {
            id: 2,
            img: Injection,
            bg: bgNecessary,
            name: "Инъекции (уколы)",
            text: "Внутривенно, внутримышечно, подкожно детям с 1 месяца",
            price: 100,
        },
        {
            id: 3,
            img: Inhalation,
            bg: bgSafety,
            name: "Ингаляции",
            text: "Специальные детские ингаляторы, бесшумные, портативные",
            price: 150,
        },
        {
            id: 4,
            img: Blood,
            bg: bgQueue,
            name: "Взятие анализов крови",
            text: "Специальные детские ингаляторы, бесшумные, портативные",
            price: 150,
        },
    ];

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
                        </div>
                        {window.innerWidth < 700 ? (
                            <List
                                items={mobile}
                                position={true}
                                title="Стоимость услуг"
                            />
                        ) : (
                            <></>
                        )}
                        <List
                            items={list}
                            position={false}
                            title="Основные принципы работы"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Principles;
