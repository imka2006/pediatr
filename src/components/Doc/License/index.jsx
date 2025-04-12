import React from 'react'
import First from "../../../assets/icon/Doc/First.svg"
import Second from "../../../assets/icon/Doc/Second.svg"

function License() {
  return (
    <>
      <div className="doc-license">
        <div className="doc-license__content">
          <h3 className="doc-license__title">Наши лицензии и сертификаты</h3>
          <p className="doc-license__text">Вы можете быть уверены, что ваш ребенок в надежных руках,  а наша клиника работает в полном соответствии с законодательством и медицинскими нормами.</p>
        </div>
        <div className="doc-license__images">
          <img src={First} alt="license" />
          <img src={Second} alt="license" />
        </div>
      </div>
    </>
  )
}

export default License