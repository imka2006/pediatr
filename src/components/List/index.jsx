import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import "./style.scss";
import 'aos/dist/aos.css';

function List({ items, title, position }) {
  const ref = useRef(null);
  const itemRefs = useRef([]); // Массив рефов для list-item
  const [isVisible, setIsVisible] = useState(false);

  // One-time animation for the entire list block
  // useEffect(() => {
  //   const node = ref.current;
  //   if (!node) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect(); // Run once
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   observer.observe(node);
  //   return () => observer.disconnect();
  // }, []);

  // Repeated animation for each list-item
  useEffect(() => {
    const observers = itemRefs.current.map((node, index) => {
      if (!node) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add("animate");
          } else {
            node.classList.remove("animate");
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(node);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [items]); // Зависимость от items для обновления рефов

  // Conditional class for different styles
  const listClass = items[0].price ? "list" : "list another";
  const bgClass = position ? "another" : "";

    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <div ref={ref} className={`${listClass} ${isVisible ? "animate" : ""}`}
            data-aos="fade-up">
      <h3 className="list-title">{title}</h3>
      <div className="list-block">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="list-item"
          >
            <div className="list-content">
              <img className="list-icon" src={item.img} alt="Consultation" />
              <img
                className={`list-bg ${bgClass}`}
                src={item.bg}
                alt="Consultation"
              />
            </div>
            <div className="list-wrapper">
              <div className="list-info">
                <h5 className="list-name">{item.name}</h5>
                <p className="list-text">{item.text}</p>
              </div>
              {item.price && <div className="list-btn">от {item.price} с.</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;