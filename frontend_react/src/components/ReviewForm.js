import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useMutation } from '@apollo/client';
import { GrClose } from 'react-icons/gr';
import RatingInput from './RatingInput';
import { SUBMIT_REVIEW } from '../graphql/queries';

const ReviewForm = ({ product, show, onClose }) => {
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState();
  const [error, setError] = useState();
  const [submitReview, { loading: isSubmiting }] = useMutation(SUBMIT_REVIEW);

  const handleReviewChange = (e) => setReview(e.target.value);
  const handleRatingChange = (newRating) => setRating(newRating);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();

    try {
      await submitReview({ variables: { rating: Number(rating), review, productId: product.id } });
      onClose();
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog onClose={onClose} as="div" className="fixed inset-0 z-10 overflow-y-auto text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <form onSubmit={handleSubmit}>
            <div className="inline-block w-full max-w-md p-6  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md mt-24">
              <button className="absolute right-0 top-0 mr-6 mt-6" onClick={onClose}>
                <GrClose />
              </button>
              <h1 className="text-2xl mb-4">What's your rating?</h1>
              <p>Rating</p>
              <RatingInput defaultRating={rating} onChange={handleRatingChange} />
              <p className="mt-4">Review</p>
              <input
                onChange={handleReviewChange}
                className="w-full border-0 outline-0 py-2"
                type="text"
                placeholder="Start typing..."
                required
              ></input>

              <input
                className="border rounded px-6 py-1 mt-4 text-slate-500 hover:border-slate-500 hover:text-slate-600 cursor-pointer"
                type="submit"
                value={isSubmiting ? 'Submitting...' : 'Submit Review'}
                disabled={isSubmiting}
              ></input>
              {error && <span className="text-pink-600 block mt-4 text-xs">{error}</span>}
            </div>
          </form>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ReviewForm;
