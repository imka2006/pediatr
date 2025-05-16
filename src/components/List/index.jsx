import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "./style.scss";
import "aos/dist/aos.css";

function List({ items, title, position }) {
  const ref = useRef(null); 

  useEffect(() => {
    AOS.init();
  }, []);

  const listClass = items[0]?.price ? "list" : "list another";
  const bgClass = position ? "another" : "";

  return (
    <div ref={ref} className={listClass} data-aos="fade-up">
      <h3 className="list-title">{title}</h3>
      <div className="list-block">
        {items.map((item) => (
          <div key={item.id} className="list-item">
            <div className="list-content">
              <img className="list-icon" src={item.img} alt="Consultation" />
              <img className={`list-bg ${bgClass}`} src={item.bg} alt="Consultation" />
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