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
        name: "Инъекции",
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
        name: "Анализы крови",
        text: "Специальные детские ингаляторы, бесшумные, портативные",
        price: 150,
    },
];

function Principles() {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get("https://nexus.kg/webhook/get_insta");
        const rawPosts = response.data?.[0]?.data;

        if (!Array.isArray(rawPosts)) {
          console.error("Instagram data format invalid");
          return;
        }

        const processedPosts = rawPosts.map((post) => {
          const display_url = post.thumbnail_url || post.media_url;
          const like_count = post.like_count || 0;

          return {
            ...post,
            display_url,
            like_count,
          };
        });

        setInstagramPosts(processedPosts);
      } catch (error) {
        console.error("Ошибка загрузки Instagram:", error);
      }
    };

    fetchInstagramPosts();

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="principles">
      <div className="container">
        <div className="principles-wrapper">
          <div className="principles-content">
            {instagramPosts.length > 0 && (
              <>
                {instagramPosts[0] && (
                  <Post
                    img={instagramPosts[0].display_url}
                    text={instagramPosts[0].caption || "Без описания"}
                    link={instagramPosts[0].permalink}
                    likes={instagramPosts[0].like_count}
                  />
                )}
                {instagramPosts[1] && (
                  <Post
                    img={instagramPosts[1].display_url}
                    text={instagramPosts[1].caption || "Без описания"}
                    link={instagramPosts[1].permalink}
                    likes={instagramPosts[1].like_count}
                  />
                )}
                {width >= 685 && width < 1115 && instagramPosts[2] && (
                  <Post
                    img={instagramPosts[2].display_url}
                    text={instagramPosts[2].caption || "Без описания"}
                    link={instagramPosts[2].permalink}
                    likes={instagramPosts[2].like_count}
                  />
                )}
              </>
            )}
          </div>

          {width < 700 && (
            <List items={mobile} position={true} title="Стоимость услуг" />
          )}

          <List items={list} position={false} title="Основные принципы работы" />
        </div>
      </div>
    </section>
  );
}

export default Principles;