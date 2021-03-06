import React from 'react';
import Loader from './Loader';
import Product from './Product';

const Home = (props) => {
  const { products = [], reviews = [], loading } = props;

  return (
    <div className="bg-gray-100">
      <h4 className="text-center mt-8 mb-16">V2 React</h4>
      {loading && <Loader />}

      {products.map((product, idx) => {
        const productReviews = reviews.filter((r) => r.productId === product.id);
        return <Product key={idx} product={product} reviews={productReviews} />;
      })}

      <a
        className="fixed right-0 bottom-0 mr-8 mb-8 underline"
        target="_blank"
        rel="noreferrer"
        href="https://gauravchl.com"
      >
        Hire me
      </a>
    </div>
  );
};

export default Home;
