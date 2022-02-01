import React from "react";

const Home = (props) => {
  const { products, reviews, loading } = props;
  console.log(products, reviews, loading);
  return <p>Home</p>;
};

export default Home;
