import React, { useEffect, useState } from "react";
import AOS from "aos";

import Pediatr from "../../../../assets/icon/Left/Tabs/pediatr.webp";
import ChildNeurologist from "../../../../assets/icon/Left/Tabs/childNeurologist.webp";
import ChildUrologist from "../../../../assets/icon/Left/Tabs/childUrologist.webp";
import Neotologist from "../../../../assets/icon/Left/Tabs/neotologist.webp";

import "aos/dist/aos.css";
import "./style.scss";

function Tabs({ onTabClick }) {
  const [active, setActive] = useState(0);

  const list = [
    { id: 0, name: "Педиатр", img: Pediatr },
    { id: 1, name: "Детский невролог", img: ChildNeurologist },
    { id: 2, name: "Детский уролог", img: ChildUrologist },
    { id: 3, name: "Неонатолог", img: Neotologist },
    { id: 4, name: "Детский уролог", img: ChildUrologist },
    { id: 5, name: "Неонатолог", img: Neotologist },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (index, name) => {
    setActive(index);
    onTabClick(name);
  };

  return (
    <div className="hero-tabs" data-aos="fade-up">
      {list.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleClick(index, item.name)}
          className={`hero-tabs__item ${active === index ? "active" : ""}`}
        >
          <img
            src={item.img}
            className={`hero-tabs__img ${active === index ? "active" : ""}`}
            alt={item.name}
          />
          <h5 className="hero-tabs__name">{item.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
