import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';

import Pediatr from "../../../../assets/icon/Left/Tabs/pediatr.webp";
import ChildNeurologist from "../../../../assets/icon/Left/Tabs/childNeurologist.webp";
import ChildUrologist from "../../../../assets/icon/Left/Tabs/childUrologist.webp";
import Neotologist from "../../../../assets/icon/Left/Tabs/neotologist.webp";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import "./style.scss";
import 'aos/dist/aos.css';

function Tabs({ onTabClick }) {
    const [active, setActive] = useState(0);

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

  //  useEffect(() => {
  //         const node = ref.current;
  //         if (!node) return;
      
  //         const observer = new IntersectionObserver(
  //             ([entry]) => {
  //                 if (entry.isIntersecting) {
  //                     setIsVisible(true);
  //                     observer.disconnect(); // полностью отключаем наблюдателя
  //                 }
  //             },
  //             { threshold: 0.3 }
  //         );
      
  //         observer.observe(node);
      
  //         return () => {
  //             observer.disconnect(); // на случай размонтирования
  //         };
  //     }, []);

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
    return (
        <SimpleBar className={`hero-tabs ${isVisible ? "animate" : ""}`}
            data-aos="fade-up">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActive(index);
              onTabClick(item.name);
            }}
            className="hero-tabs__item"
          >
            <img
              src={item.img}
              className={
                active === index
                  ? "hero-tabs__img active"
                  : "hero-tabs__img"
              }
              alt="img"
            />
            <h5 className="hero-tabs__name">{item.name}</h5>
          </div>
        ))}
      </SimpleBar>
      
    );
}

export default Tabs;
