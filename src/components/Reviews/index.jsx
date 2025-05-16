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

const widthList = ["lil", "mid", "long", "mid", "mid", "mid", "lil", "big", "lil"];

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

const getBatch = (data, index) => {
  const result = [];

  if (index === 0) {
    // первая партия: 8 отзывов, ширина начинается со второго элемента widthList
    for (let i = 0; i < 8 && i < data.length; i++) {
      const width = widthList[i + 1] || "310";
      result.push({ ...data[i], width });
    }
  } else {
    // остальные партии: по 9 отзывов
    const start = 8 + (index - 1) * 9;
    const end = start + 9;
    for (let i = start; i < end && i < data.length; i++) {
      const width = widthList[(i + 1) % widthList.length] || "310";
      result.push({ ...data[i], width });
    }
  }

  return result;
};

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [batches, setBatches] = useState([]);
  const [batchIndex, setBatchIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    fetchFiveStarReviews()
      .then((data) => {
        setReviews(data);
        setBatches(getBatch(data, 0));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при получении отзывов:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const nextIndex = batchIndex + 1;
          const nextBatch = getBatch(reviews, nextIndex);

          if (nextBatch.length > 0) {
            setBatches((prev) => [...prev, ...nextBatch]);
            setBatchIndex(nextIndex);
          }
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [batchIndex, reviews, loading]);

  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-wrapper">
          <TwoGis />
          {loading ? (
            <p>Загрузка отзывов...</p>
          ) : (
            batches.map((item) => <Cart key={item.id} item={item} wid={item.width} />)
          )}
          <div ref={observerRef} style={{ height: 1, minHeight: "10px" }} />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
