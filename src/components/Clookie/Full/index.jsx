import React from "react";

import "./style.scss"

function Full({setLil,setFull}) {
    const onClose = () => {
        setFull(false)
        setLil(false)
    }
    return (
        <div className="cookie-full">
            <h2 className="cookie-full__title">Условия использования файлов cookie</h2>
            <div className="cookie-full__text">
                Я уведомлен(a) о том, что сайт pediatr.kg использует файлы
                cookie, чтобы гарантировать максимальное удобство пользователям,
                предоставляя персонализированную информацию, запоминая
                предпочтения в области маркетинга и продукции, а также помогая
                получить правильную информацию.
                <br />
                <br />
                При использовании данного сайта, я подтверждаю свое согласие на
                использование файлов cookie в соответствии с настоящим
                уведомлением в отношении данного типа файлов.
                <br />
                <br />
                Я уведомлен(а), что сайт pediatr.kg использует данный тип
                файлов. В случае моего несогласия, я должен(на) соотвествующим
                образом установить настройки браузера или не использовать сайт
                pediatr.kg.
            </div>
            <div className="cookie-full__wrapper">
                <button className="cookie-full__blue" onClick={() => onClose()}>Принять</button>
            </div>
        </div>
    );
}

export default Full;
