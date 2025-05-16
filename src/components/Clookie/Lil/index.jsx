import React from 'react'
import Logo from "../../../assets/icon/Header/logo.svg"

import "./style.scss"
function Lil() {

  return (
    <div className="cookie-lil">
        <img src={Logo} alt="logo" />
        <div className="cookie-lil__text">Этот сайт использует cookie. Продолжая пользоваться сайтом, вы даете согласие на использование ваших cookie-файлов.</div>
        <div className="cookie-lil__wrapper">
            <button className="cookie-lil__blue">Принять</button>
            <button className="cookie-lil__white">Подробнее</button>
        </div>
    </div>
  )
}

export default Lil