import React, { useState } from 'react';
import Stars from './Stars';
import Review from './Review';
import ReviewForm from './ReviewForm';

const Product = ({ product, reviews }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const hideReviewForm = () => setShowReviewForm(false);
  const displayReviewForm = () => setShowReviewForm(true);

  let avgRating = reviews.reduce((a, c) => c.rating + a, 0) / reviews.length;
  avgRating = Number(avgRating).toFixed(1);

  return (
    <div className="bg-white rounded p-8 max-w-screen-sm w-full mx-auto mb-12">
      <h2 className="text-xl font-medium">{product.title}</h2>
      <div className="flex items-center mt-4 mb-8">
        <span className="text-xl mr-4">{avgRating}</span>
        <Stars rating={avgRating} size={20} />

        <button
          onClick={displayReviewForm}
          className="ml-auto border rounded px-6 py-1 text-slate-500 hover:border-slate-500 hover:text-slate-600"
        >
          Add review
        </button>
      </div>

      <hr />
      <div className="mt-8">
        {reviews.map((review, idx) => (
          <Review key={idx} review={review} />
        ))}
      </div>
      <ReviewForm product={product} show={showReviewForm} onClose={hideReviewForm} />
    </div>
  );
};

export default Product;
