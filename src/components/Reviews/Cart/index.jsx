import React from "react";
import LilStar from "../../../assets/icon/Reviews/LilStar.svg"
function Cart({item}) {
    
    return (
        <>
            <div key={item.id} className={'reviews-block ' + item.class}>
                <h4 className="reviews-block__name">{item.name}</h4>
                <div className="reviews-block__star">
                    {Array.from({ length: item.rating }, (_, index) => (
                        <img key={index} src={LilStar} alt="star" />
                    ))}
                </div>
                <div className="reviews-block__date">{item.date}</div>
                <div className="reviews-block__text">{item.text}</div>
            </div>
        </>
    );
}

export default Cart;

// import React from "react";

// function Cart({ author, rating, date, text }) {
//   // Формируем массив звёзд
//   const stars = Array.from({ length: 5 }, (_, i) => {
//     const starClass = i < rating ? "star filled" : "star";
//     return <span key={i} className={starClass}>★</span>;
//   });

//   return (
//     <article className="review-card">
//       <h3 className="review-author">{author}</h3>
//       <div className="review-rating">{stars}</div>
//       <div className="review-date">{date}</div>
//       <p className="review-text">{text}</p>
//     </article>
//   );
// }

// export default Cart;
