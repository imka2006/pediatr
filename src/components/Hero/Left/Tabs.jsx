import React, { useState } from "react";

import Pediatr from "../../../assets/icon/Left/Tabs/pediatr.svg";
import ChildNeurologist from "../../../assets/icon/Left/Tabs/childNeurologist.svg";
import ChildUrologist from "../../../assets/icon/Left/Tabs/childUrologist.svg";
import Neotologist from "../../../assets/icon/Left/Tabs/neotologist.svg";

function Tabs({ onTabClick }) {
  const [active, setActive] = useState(0);

  const list = [
    {
      id: 0,
      name: "Педиатр",
      img: Pediatr,
    },
    {
      id: 1,
      name: "Детский невролог",
      img: ChildNeurologist,
    },
    {
      id: 2,
      name: "Детский уролог",
      img: ChildUrologist,
    },
    {
      id: 3,
      name: "Неонатолог",
      img: Neotologist,
    },
  ];

  return (
    <div className="hero-tabs">
      {list.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            setActive(index);
            // При клике передаём в родитель компонент через onTabClick
            onTabClick(item.name);
          }}
          className="hero-tabs__item"
        >
          <img
            src={item.img}
            className={active === index ? "hero-tabs__img active" : "hero-tabs__img"}
            alt="img"
          />
          <h5 className="hero-tabs__name">{item.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default Tabs;