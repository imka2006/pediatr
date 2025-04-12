import React from 'react'
import "./style.scss"
function List({items, title}) {
    
  return (
    <>
        <div className={items[0].price ? 'list' : 'list another'}>
            <h3 className="list-title">{title}</h3>
            <div className="list-block">
                {
                    items.map((item) => (
                    <div key={item.id} className="list-item">
                        <img className='list-icon' src={item.img} alt="Consultation" />
                        <div className="list-wrapper">
                            <div className="list-info">
                                <h5 className="list-name">{item.name}</h5>
                                <p className="list-text">{item.text}</p>
                            </div>
                            {
                                item.price ? (
                                    <button className="list-btn">от {item.price} с.</button>
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