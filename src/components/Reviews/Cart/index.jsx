import React, { useState, useEffect } from "react";
import "./style.scss";
import LilStar from "../../../assets/icon/Reviews/LilStar.svg";
import Arrow from "../../../assets/icon/Reviews/Arrow.svg";

function Cart({ item, wid }) {
  const [showFullText, setShowFullText] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  useEffect(() => {
    const words = item.text.split(" ");
    const isLong = words.length > 20;

    if (showFullText || !isLong) {
      setDisplayText(item.text);
    } else {
      setDisplayText(words.slice(0, 20).join(" ") + "...");
    }
  }, [showFullText, item.text]);

  const isLongText = item.text.split(" ").length > 20;

  return (
    <div className={`reviews-block ${wid}`} data-aos="fade-up" data-aos-duration="600">
      <h4 className="reviews-block__name">{item.user_name}</h4>
      <div className="reviews-block__star">
        {Array(item.rating)
          .fill()
          .map((_, index) => (
            <img key={index} src={LilStar} alt="star" />
          ))}
      </div>
      <div className="reviews-block__date">{formatDate(item.date_created)}</div>
      <div className="reviews-block__text">{displayText}</div>
      {isLongText && !showFullText && (
        <button className="reviews-block__link" onClick={() => setShowFullText(true)}>
          Читать полностью <img src={Arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default Cart;
