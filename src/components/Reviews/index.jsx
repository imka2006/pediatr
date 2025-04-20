import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cart from "./Cart";
import TwoGis from "./TwoGis";

import "./style.scss";

const ORG_ID = "70000001051350763";
const API_KEY = "86fa3d7f-3448-4eb9-860b-09a67b00615e";

const REVIEWS_URL = `https://public-api.reviews.2gis.com/2.0/orgs/${ORG_ID}/reviews`;
const FIRST_PARAMS = {
  key: API_KEY,
  rated: "true",
  limit: 50,
  sort_by: "date_created",
  fields: "meta.org_rating,meta.org_reviews_count",
};

async function fetchFiveStarReviews() {
  const reviews5 = [];
  let url = REVIEWS_URL;
  let params = { ...FIRST_PARAMS };

  while (true) {
    const response = await axios.get(url, { params });
    const data = response.data;

    for (const r of data.reviews) {
      if (r.rating === 5) {
        reviews5.push({
          id: r.id,
          date_created: r.date_created,
          rating: r.rating,
          text: r.text.replace(/\n/g, " "),
          user_name: r.user?.name || null,
        });
      }
    }

    const nextLink = data.meta?.next_link;
    if (!nextLink) break;

    url = nextLink;
    params = {};
  }

  return reviews5;
}

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    fetchFiveStarReviews()
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при получении отзывов:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleCount((prev) => {
              const nextCount = prev + 3;
              return nextCount <= reviews.length ? nextCount : prev;
            });
          }, 150); // чуть-чуть задержки
        }
      },
      { threshold: 1.0 }
    );
  
    if (observerRef.current) observer.observe(observerRef.current);
  
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [reviews, visibleCount]);  

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-wrapper">
          <TwoGis />
          {loading ? (
            <p>Загрузка отзывов...</p>
          ) : (
            visibleReviews.map((item) => <Cart key={item.id} item={item} />)
          )}

          {/* 👇 Невидимый триггер внизу списка */}
          <div ref={observerRef} style={{ height: 1, minHeight: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
