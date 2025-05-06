import React from 'react'
import Icon from "../../../assets/icon/Modal/Final.svg"
import "./style.scss"

function Final({onClose}) {
  return (
    <div className='final'>
        <img src={Icon} alt="icon" />
        <div className="final-title">Ваша заявка принята!</div>
        <p className="final-text">Мы свяжемся с вами в ближайшее время.</p>
        <button onClick={() => onClose()} className="final-close">Закрыть</button>
    </div>
  )
}

export default Final