import { useQuery, useSubscription } from '@apollo/client';
import { GET_HOMEPAGE_DATA, REVIEWS_SUBSCRIPTION } from '../graphql/queries';
import Home from '../components/Home';

const HomeContainer = () => {
  const { loading, data, updateQuery } = useQuery(GET_HOMEPAGE_DATA);
  const onSubscriptionData = ({ subscriptionData }) => {
    updateQuery((prev) => {
      const { data } = subscriptionData || {};
      const { reviewAdded } = data || {};
      const { products, reviews = [] } = prev;
      const newReviews = [...reviews, { ...reviewAdded }];
      return { products, reviews: newReviews };
    });
  };
  useSubscription(REVIEWS_SUBSCRIPTION, { onSubscriptionData });

  const { products, reviews } = data || {};

  return (
    <div className="App">
      <Home loading={loading} products={products} reviews={reviews} />
    </div>
  );
};

export default HomeContainer;
