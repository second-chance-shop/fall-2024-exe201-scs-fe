import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    } else {
      stars.push(<span key={i} className="text-gray-400">★</span>);
    }
  }

  return (
    <div className="flex">
      {stars}
      <span className="ml-2 text-gray-600">{rating} / {totalStars}</span>
    </div>
  );
};

export default StarRating;
