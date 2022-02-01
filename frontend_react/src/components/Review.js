import React from 'react';
import Stars from './Stars';

const Review = ({ review }) => {
  const { rating, review: value } = review;
  return (
    <div className="flex mt-4 items-center">
      <Stars rating={rating} size={20} />
      <span className="ml-4">{rating}</span>
      <span className="ml-2 text-sm text-slate-500 text-ellipsis overflow-hidden whitespace-nowrap">{value}</span>
    </div>
  );
};

export default Review;
