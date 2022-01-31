const BACKEND_URL = "http://localhost:8080";

const fetchData = async () => {
  const res1 = await fetch(`${BACKEND_URL}/products`);
  const { data: products } = await res1.json();
  const res2 = await fetch(`${BACKEND_URL}/reviews`);
  const { data: reviews } = await res2.json();
  return { reviews, products };
};

const getStars = (rating) => {
  return `
    <div class="stars-container readonly" data-rating="${Math.ceil(
      rating || 1
    )}">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
    `;
};

const getReviews = (reviews) => {
  if (!reviews || !reviews.length) {
    return `<div class='reviews-container text-light'>No reviews yet</div>`;
  }
  const reviewsHtml = reviews.map((review) => {
    return `
        <div class='reviews-container'>
            ${getStars(review.rating)}
            ${review.rating},
            <span> ${review.review}</span>
        </div>
    `;
  });

  return reviewsHtml.join("");
};

const renderProducts = async () => {
  const { reviews, products } = await fetchData();
  const productsHtml = products
    .map((product) => {
      const productReviews = reviews.filter((r) => r.productId === product.id);
      const reviewsHtml = getReviews(productReviews);
      const avgRating =
        productReviews.reduce((a, c) => c.rating + a, 0) /
        productReviews.length;

      return `
        <div class='product'>
        <h2>${product.title}</h2>
        <div class='avg-rating-container'>
            <span>${avgRating || 0}</span> ${getStars(avgRating)} 
            <button>Add review</button>
        </div>
        <hr />
        <div>
            <h4>Reviews</h4>
            <div>${reviewsHtml}</div>
        </div>
        </div>
        `;
    })
    .join("");

  document.getElementById("products-container").innerHTML = productsHtml;
};

window.addEventListener("load", renderProducts);
