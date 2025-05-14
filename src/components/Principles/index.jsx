// import React from "react";
// import Post from "../Post";
// import List from "../List";
// import First from "../../assets/img/Principles/First.png";
// import Second from "../../assets/img/Principles/Second.png";

// import Queue from "../../assets/icon/List/Queue.svg";
// import Conect from "../../assets/icon/List/Conect.svg";
// import Necessary from "../../assets/icon/List/Necessary.svg";
// import Safety from "../../assets/icon/List/Safety.svg";

// import bgQueue from "../../assets/icon/List/bgQueue.svg";
// import bgConect from "../../assets/icon/List/bgConect.svg";
// import bgNecessary from "../../assets/icon/List/bgNecessary.svg";
// import bgSafety from "../../assets/icon/List/bgSafety.svg";

// import Consultation from "../../assets/icon/Services/Price/Consultation.svg";
// import Drip from "../../assets/icon/Services/Price/Drip.svg";
// import Injection from "../../assets/icon/Services/Price/Injection.svg";
// import Inhalation from "../../assets/icon/Services/Price/Inhalation.svg";
// import Blood from "../../assets/icon/Services/Price/Blood.svg";

// import "./style.scss";
// function Principles() {
//     const firstText =
//         "Забота о вашем ребенке — наша главная цель! В нашей клинике работают опытные и заботливые врачи";
//     const secondText =
//         "Всем привет🙋🏻‍♀️. меня зовут Айгерим, на данный момент я являюсь действующим врачом-педиатром в клинике Мама";

//     const list = [
//         {
//             id: 0,
//             img: Queue,
//             bg: bgQueue,
//             name: "Принимаем без очередей по записи",
//             text: "Минимизируем количеством пациентов, одновременно находящихся в одном помещении.",
//         },
//         {
//             id: 1,
//             img: Conect,
//             bg: bgConect,
//             name: "Доктор остается с вами на связи",
//             text: "В целях контроля ситуации Доктор ведет пациента до полного выздоровления или улучшение качества жизни при хронических заболеваниях.",
//         },
//         {
//             id: 2,
//             img: Necessary,
//             bg: bgNecessary,
//             name: "Назначаем только необходимое",
//             text: "С доказанной эффективностью и безопасностью в соответствии с международными протоколами и стандартами и ничего лишнего.",
//         },
//         {
//             id: 3,
//             img: Safety,
//             bg: bgSafety,
//             name: "Чистота и стерильность",
//             text: "Одноразовые маски и перчатки, инструменты и простыни, обеззараживание и стерилизация воздуха в клинике, санитарная уборка, контроль здоровья персонала. Подготовка и дезинфекция кабинета перед каждым пациентом.",
//         },
//     ];

//     const mobile = [
//         {
//             id: 0,
//             img: Consultation,
//             bg: bgQueue,
//             name: "Консультация врача",
//             text: "",
//             price: 950,
//         },
//         {
//             id: 1,
//             img: Drip,
//             bg: bgConect,
//             name: "Капельницы",
//             text: "Опытные медсестры ставят капельницу детям с 1 месяца",
//             price: 350,
//         },
//         {
//             id: 2,
//             img: Injection,
//             bg: bgNecessary,
//             name: "Инъекции (уколы)",
//             text: "Внутривенно, внутримышечно, подкожно детям с 1 месяца",
//             price: 100,
//         },
//         {
//             id: 3,
//             img: Inhalation,
//             bg: bgSafety,
//             name: "Ингаляции",
//             text: "Специальные детские ингаляторы, бесшумные, портативные",
//             price: 150,
//         },
//         {
//             id: 4,
//             img: Blood,
//             bg: bgQueue,
//             name: "Взятие анализов крови",
//             text: "Специальные детские ингаляторы, бесшумные, портативные",
//             price: 150,
//         },
//     ];

//     return (
//         <>
//             <div className="principles">
//                 <div className="container">
//                     <div className="principles-wrapper">
                        // <div className="principles-content">
                        //     <Post img={First} text={firstText} link={"#"} />
                        //     <Post img={Second} text={secondText} link={"#"} />
                            // {window.innerWidth >= 685 &&
                            // window.innerWidth < 1115 ? (
                            //     <Post img={First} text={secondText} link="#" />
                            // ) : null}
                        // </div>
                        // {window.innerWidth < 700 ? (
                        //     <List
                        //         items={mobile}
                        //         position={true}
                        //         title="Стоимость услуг"
                        //     />
                        // ) : (
                        //     <></>
                        // )}
//                         <List
//                             items={list}
//                             position={false}
//                             title="Основные принципы работы"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Principles;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post";
import List from "../List";

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

const TOKEN = "IGQWRPbndOYWQyV2gzRV9qNHdkRkJTdF9RSHNITFZA2MnBzeV9IRXE3c01MQjhMMHZAHRGc3ZA1lBNU1RUzJycjBUX09fcDZASNUVERDBBXzN6M3ZAzRVljVUtjQ0JFNGR0VXJ6ZAzF1S3FMd2dqNVNGQnJhVlBnQk9uNUkZD"; // Лучше хранить в .env

function Principles() {
    const [instagramPosts, setInstagramPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get(
                    `https://graph.instagram.com/v22.0/me/media?fields=id,caption,media_url,permalink,thumbnail_url,video_views,timestamp&limit=4&access_token=${TOKEN}`
                );
                setInstagramPosts(response.data.data);
            } catch (error) {
                console.error("Ошибка загрузки Instagram:", error);
            }
        };

        fetchInstagramPosts();
    }, []);

    const list = [
        { id: 0, img: Queue, bg: bgQueue, name: "Принимаем без очередей по записи", text: "Минимизируем количеством пациентов, одновременно находящихся в одном помещении." },
        { id: 1, img: Conect, bg: bgConect, name: "Доктор остается с вами на связи", text: "В целях контроля ситуации Доктор ведет пациента до полного выздоровления или улучшение качества жизни при хронических заболеваниях." },
        { id: 2, img: Necessary, bg: bgNecessary, name: "Назначаем только необходимое", text: "С доказанной эффективностью и безопасностью в соответствии с международными протоколами и стандартами и ничего лишнего." },
        { id: 3, img: Safety, bg: bgSafety, name: "Чистота и стерильность", text: "Одноразовые маски и перчатки, инструменты и простыни, обеззараживание и стерилизация воздуха в клинике, санитарная уборка, контроль здоровья персонала. Подготовка и дезинфекция кабинета перед каждым пациентом." },
    ];

    const mobile = [
        { id: 0, img: Consultation, bg: bgQueue, name: "Консультация врача", text: "", price: 950 },
        { id: 1, img: Drip, bg: bgConect, name: "Капельницы", text: "Опытные медсестры ставят капельницу детям с 1 месяца", price: 350 },
        { id: 2, img: Injection, bg: bgNecessary, name: "Инъекции", text: "Внутривенно, внутримышечно, подкожно детям с 1 месяца", price: 100 },
        { id: 3, img: Inhalation, bg: bgSafety, name: "Ингаляции", text: "Специальные детские ингаляторы, бесшумные, портативные", price: 150 },
        { id: 4, img: Blood, bg: bgQueue, name: "Анализы крови", text: "Специальные детские ингаляторы, бесшумные, портативные", price: 150 },
    ];

    return (
        <div className="principles">
            <div className="container">
                <div className="principles-wrapper">
                    <div className="principles-content">
                        {/* Рендерим ровно 4 поста, если загружены */}
                        {instagramPosts.length >= 4 && (
                            <>
                                <Post
                                    img={instagramPosts[0].media_url}
                                    text={instagramPosts[0].caption || "Без описания"}
                                    link={instagramPosts[0].permalink}
                                />
                                <Post
                                    img={instagramPosts[1].media_url}
                                    text={instagramPosts[1].caption || "Без описания"}
                                    link={instagramPosts[1].permalink}
                                />
                                    {window.innerWidth >= 685 &&
                            window.innerWidth < 1115 ? (
                                
  <Post
                                    img={instagramPosts[3].media_url}
                                    text={instagramPosts[3].caption || "Без описания"}
                                    link={instagramPosts[3].permalink}
                                />

                            ) : null}
                              
                                {/* <Post
                                    img={instagramPosts[3].media_url}
                                    text={instagramPosts[3].caption || "Без описания"}
                                    link={instagramPosts[3].permalink}
                                /> */}
                            </>
                        )}
                    </div>

                    {window.innerWidth < 700 && (
                        <List items={mobile} position={true} title="Стоимость услуг" />
                    )}

                    <List items={list} position={false} title="Основные принципы работы" />
                </div>
            </div>
        </div>
    );
}

export default Principles;

