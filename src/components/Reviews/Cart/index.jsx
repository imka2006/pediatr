import React, { useState } from "react";
import LilStar from "../../../assets/icon/Reviews/LilStar.svg";
import Arrow from "../../../assets/icon/Reviews/Arrow.svg";

function Cart({ item }) {
  const [showFullText, setShowFullText] = useState(false);

  const isLongText = item.text.split(" ").length > 25;

  // Обрезаем текст
  const truncateText = (text, maxWords = 25) => {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  // Форматируем дату
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="reviews-block">
      <h4 className="reviews-block__name">{item.user_name || "Аноним"}</h4>
      <div className="reviews-block__star">
        {Array.from({ length: item.rating }, (_, index) => (
          <img key={index} src={LilStar} alt="star" />
        ))}
      </div>
      <div className="reviews-block__date">{formatDate(item.date_created)}</div>
      <div className="reviews-block__text">
        {truncateText(item.text)}
      </div>
      {isLongText && (
        <a
          href="https://2gis.kg/bishkek/firm/70000001051350764/tab/reviews?m=74.60307%2C42.882236%2F17.8&immersive=on"
          target="_blank"
          className="reviews-block__link"
          onClick={(e) => {
            e.preventDefault();
            setShowFullText(true);
          }}
        >
          Читать полностью <img src={Arrow} alt="arrow" />
        </a>
      )}
    </div>
  );
}

export default Cart;
