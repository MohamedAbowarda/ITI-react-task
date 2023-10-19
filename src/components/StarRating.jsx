import React from "react";
import "./Stars.css";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating;
    const starClass = filled ? "filled" : "empty";
    stars.push(<span key={i} className={`star ${starClass}`}></span>);
  }
  return <div>{stars}</div>;
};

export default StarRating;
