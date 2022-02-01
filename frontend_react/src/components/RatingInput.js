import React, { useState } from 'react';
import StarHalf from './svgs/StarHalf';
import Star from './svgs/Star';

const RatingInput = ({ onChange, defaultRating, maxRating = 5, size = 24 }) => {
  const [rating, setRating] = useState(defaultRating || 1);
  const [hoverRating, setHoverRating] = useState(null);

  const handleClickStar = (e) => {
    const idx = Number(e.currentTarget.getAttribute('data-idx'));
    const side = e.target.getAttribute('data-side');
    const newRating = side === 'left' ? idx + 0.5 : idx + 1;
    setHoverRating(null);
    return setRating(newRating);
  };

  const mainRating = hoverRating !== null ? hoverRating : rating;

  const yellowStars = Math.floor(mainRating);
  const addHalfStar = mainRating % 1 !== 0;
  const grayStars = maxRating - yellowStars - (addHalfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < yellowStars; i++) {
    stars.push(<Star size={size} />);
  }
  if (addHalfStar) stars.push(<StarHalf size={size} />);
  for (let i = 0; i < grayStars; i++) {
    stars.push(<Star size={size} color="#e0e0e0" />);
  }

  const handleOnMouseIn = (e) => {
    const idx = Number(e.currentTarget.getAttribute('data-idx'));
    const side = e.currentTarget.getAttribute('data-side');
    const newRating = side === 'left' ? idx + 0.5 : idx + 1;
    return setHoverRating(newRating);
  };

  const handleOnMouseLeave = (e) => {
    setHoverRating(null);
  };

  return (
    <div className="flex items-center">
      <div className="flex cursor-pointer">
        {stars.map((star, idx) => (
          <div key={idx} data-idx={idx} onClick={handleClickStar} className="relative pr-2">
            <div
              data-idx={idx}
              onMouseEnter={handleOnMouseIn}
              onMouseLeave={handleOnMouseLeave}
              data-side="left"
              className="w-1/2 h-full absolute left-0"
            ></div>
            <div
              data-idx={idx}
              onMouseEnter={handleOnMouseIn}
              onMouseLeave={handleOnMouseLeave}
              data-side="right"
              className="w-1/2 h-full absolute right-0"
            ></div>
            {star}
          </div>
        ))}
      </div>
      <div className="text-gray-400 text-lg pt-1 ml-1">{mainRating}</div>
    </div>
  );
};

export default RatingInput;
