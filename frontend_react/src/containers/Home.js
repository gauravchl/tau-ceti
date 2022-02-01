import { useQuery } from "@apollo/client";
import { GET_HOMEPAGE_DATA } from "../graphql/queries";

import Home from "../components/Home";

const HomeContainer = () => {
  const { loading, data } = useQuery(GET_HOMEPAGE_DATA);
  const { products, reviews } = data || {};

  return (
    <div className="App">
      <Home loading={loading} products={products} reviews={reviews} />
    </div>
  );
};

export default HomeContainer;
