import React from "react";

import BigStar from "../../../assets/icon/Reviews/BigStar.svg";
import Bg from "../../../assets/img/Bg/TwoGis.png";

function TwoGis() {
    return (
        <>
            <div className="reviews-main reviews-block">
                <img className="reviews-main__bg" src={Bg} alt="bg" />
                <h3 className="reviews-main__title">
                    Отзывы <span>2Gis</span>
                </h3>
                <div className="reviews-main__grade">4.9</div>
                <div className="reviews-main__counter">203 оценки</div>
                <div className="reviews-main__star">
                    {Array.from({ length: 5 }, (_, index) => (
                        <img key={index} src={BigStar} alt="star" />
                    ))}
                </div>
            </div>
        </>
    );
}

export default TwoGis;

// import React from "react";
// import ReviewCard from "../Cart";

// const reviewsData = [
//   {
//     id: 1,
//     author: "Salta Salta1",
//     rating: 5,
//     date: "12 февраля 2025",
//     text: "Жылдыз ... Рахмат, отличный врач!!!"
//   },
//   {
//     id: 2,
//     author: "A Маникова",
//     rating: 5,
//     date: "12 февраля 2025",
//     text: "Хочу поблагодарить врача Алину ... Теперь только к ней!!!"
//   },
//   {
//     id: 3,
//     author: "Salta Salta1",
//     rating: 5,
//     date: "12 февраля 2025",
//     text: "Жылдыз ... Рахмат, отличный врач!!!"
//   },
//   {
//     id: 4,
//     author: "A Маникова",
//     rating: 5,
//     date: "12 февраля 2025",
//     text: "Хочу поблагодарить врача Алину ... Теперь только к ней!!!"
//   },
//   // Дополните массив своими отзывами
// ];

// function Reviews() {
//   return (
//     <section className="reviews-section">
//       <div className="reviews-header">
//         <h2>Отзывы 2Gis</h2>
//         <div className="reviews-rating">4.9</div>
//         <div className="reviews-count">203 оценки</div>
//         <div className="reviews-stars">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span key={i} className="star">★</span>
//           ))}
//         </div>
//       </div>

//       <div className="reviews-grid">
//         {reviewsData.map((item) => (
//           <ReviewCard
//             key={item.id}
//             author={item.author}
//             rating={item.rating}
//             date={item.date}
//             text={item.text}
//           />
//         ))}
//       </div>

//       <button className="reviews-load-more">Загрузить еще</button>
//     </section>
//   );
// }

// export default Reviews;
