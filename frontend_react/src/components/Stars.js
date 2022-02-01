import React from 'react';
import StarHalf from './svgs/StarHalf';
import Star from './svgs/Star';

const Stars = ({ rating, maxRating = 5, size = '22' }) => {
  const yellowStars = Math.floor(rating);
  const addHalfStar = rating % 1 !== 0;
  const grayStars = maxRating - yellowStars - (addHalfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < yellowStars; i++) {
    stars.push(<Star size={size} className="mr-2" />);
  }
  if (addHalfStar) stars.push(<StarHalf size={size} className="mr-2" />);
  for (let i = 0; i < grayStars; i++) {
    stars.push(<Star size={size} className="mr-2" color="#e0e0e0" />);
  }
  return <div className="flex">{stars.map((S) => S)}</div>;
};

export default Stars;
