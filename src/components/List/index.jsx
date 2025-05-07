import React, { useEffect, useRef, useState } from "react";

import "./style.scss"

function List({items, title, animation}) {

     const ref = useRef(null);
        const [isVisible, setIsVisible] = useState(false);
    
       useEffect(() => {
              const node = ref.current;
              if (!node) return;
          
              const observer = new IntersectionObserver(
                  ([entry]) => {
                      if (entry.isIntersecting) {
                          setIsVisible(true);
                          observer.disconnect(); // полностью отключаем наблюдателя
                      }
                  },
                  { threshold: 0.3 }
              );
          
              observer.observe(node);
          
              return () => {
                  observer.disconnect(); // на случай размонтирования
              };
          }, []);
    
  return (
    <>
        <div ref={ref} className={`${items[0].price ? 'list' : 'list another'} ${isVisible ? 'animate' : ''}`}>
            <h3 className="list-title">{title}</h3>
            <div className="list-block">
                {
                    items.map((item) => (
                        <div key={item.id} className="list-item">
                            <div className="list-content">
                                <img className='list-icon' src={item.img} alt="Consultation" />
                                {animation && (<img className={`list-bg ${animation === 'false' ? 'another' : ''}`} src={item.bg} alt="Consultation" />)}
                            </div>
                            <div className="list-wrapper">
                                <div className="list-info">
                                    <h5 className="list-name">{item.name}</h5>
                                    <p className="list-text">{item.text}</p>
                                </div>
                                {
                                    item.price ? (
                                        <div className="list-btn">от {item.price} с.</div>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </>
  )
}

export default List