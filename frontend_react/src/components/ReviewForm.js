import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import RatingInput from './RatingInput';

const ReviewForm = ({ product, show, onClose }) => {
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
          <div className="inline-block w-full max-w-md p-6  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md mt-24">
            <h1 className="text-2xl mb-4">What's your rating?</h1>
            <p>Rating</p>
            <RatingInput defaultRating={3} />
            <p className="mt-4">Review</p>
            <input className="w-full border-0 outline-0 py-2" type="text" placeholder="Start typing..."></input>

            <input
              className="border rounded px-6 py-1 mt-4 text-slate-500 hover:border-slate-500 hover:text-slate-600 cursor-pointer"
              type="submit"
              value="Submit Review"
            ></input>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ReviewForm;
