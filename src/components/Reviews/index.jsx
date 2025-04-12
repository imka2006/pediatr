import React from 'react'
import "./style.scss"
import TwoGis from './TwoGis'
import Cart from './Cart'
function Reviews() {

    const reviewsData = [
          {
            id: 1,
            name: "Salta Salta1",
            rating: 5,
            date: "12 февраля 2025",
            class:"mid",
            text: "Жылдыз Эмилбековна кыйын врач! Оз кесибин жакшы билет. Балдарымды жакшы карайт, телефондон да консультация берет. Рахмат, биздин врач!!!"
          },
          {
            id: 2,
            name: "A Маникова",
            rating: 5,
            date: "12 февраля 2025",
            class:"long",
            text: "Хочу поблагодарить врача Алину Адылбековну за её профессионализм! Очень внимательная, чуткая, осматривает тщательно😍. Поставила точный диагноз, прописала все только нужное 👏ничего лишнего🫶🏻 Теперь только к ней!!!"
          },
    ]

  return (
    <>
    <div className="reviews">
        <div className="container">
            <div className="reviews-wrapper">
                <TwoGis />
                {
                    reviewsData.map((item) => (
                        <Cart item={item} />
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Reviews