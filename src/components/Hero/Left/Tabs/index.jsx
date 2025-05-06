import React, { useEffect, useRef, useState } from "react";

import Pediatr from "../../../../assets/icon/Left/Tabs/pediatr.svg";
import ChildNeurologist from "../../../../assets/icon/Left/Tabs/childNeurologist.svg";
import ChildUrologist from "../../../../assets/icon/Left/Tabs/childUrologist.svg";
import Neotologist from "../../../../assets/icon/Left/Tabs/neotologist.svg";

import "./style.scss";

function Tabs({ onTabClick }) {
    const [active, setActive] = useState(0);

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        const node = ref.current;
        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

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
        <div ref={ref} className={`hero-tabs ${isVisible ? "animate" : ""}`}>
            {list.map((item, index) => (
                <div
                    key={item.id}
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
        </div>
    );
}

export default Tabs;
