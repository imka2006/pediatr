import React, { useState, useRef, useEffect } from "react";
import LilStar from "../../../assets/icon/Reviews/LilStar.svg";
import Arrow from "../../../assets/icon/Reviews/Arrow.svg";

function Cart({ item, wid }) {
  const [showFullText, setShowFullText] = useState(false);
  const [displayText, setDisplayText] = useState(item.text);
  const textRef = useRef(null);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const isLongText = item.text.split(" ").length > 5;

  useEffect(() => {
    if (showFullText || !isLongText) {
      setDisplayText(item.text);
      return;
    }

    const element = textRef.current;
    const originalText = item.text;
    let truncatedText = originalText;
    element.textContent = truncatedText;

    // Проверяем, превышает ли высота элемента 80px
    while (element.scrollHeight > 80 && truncatedText.length > 0) {
      truncatedText = truncatedText.slice(0, -1); // Убираем по одному символу
      element.textContent = truncatedText + "...";
    }

    setDisplayText(truncatedText + "...");
  }, [showFullText, item.text, isLongText]);

  return (
    <div className={`reviews-block ${wid}`}>
      <h4 className="reviews-block__name">{item.user_name || "Аноним"}</h4>
      <div className="reviews-block__star">
        {Array(item.rating)
          .fill()
          .map((_, index) => (
            <img key={index} src={LilStar} alt="star" />
          ))}
      </div>
      <div className="reviews-block__date">{formatDate(item.date_created)}</div>
      <div
        className="reviews-block__text"
        ref={textRef}
        style={{
          maxHeight: "70px",
          overflow: "hidden",
        }}
      >
        {displayText}
      </div>
      {isLongText && !showFullText && (
        <button
          className="reviews-block__link"
          // onClick={() => setShowFullText(true)}
        >
          Читать полностью <img src={Arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default Cart;