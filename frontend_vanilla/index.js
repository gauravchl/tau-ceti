const BACKEND_URL = "https://backend.gauravchl.com";

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
      let avgRating =
        productReviews.reduce((a, c) => c.rating + a, 0) /
        productReviews.length;
      avgRating = Number(avgRating).toFixed(1);

      return `
        <div class='product'>
        <h2>${product.title}</h2>
        <div class='avg-rating-container'>
            <span>${avgRating || 0}</span> ${getStars(avgRating)} 
            <button class='show-form-btn' data-productId='${
              product.id
            }'>Add review</button>
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

  // Attach event handlers
  const addReviewBtns = document.querySelectorAll(".show-form-btn");
  addReviewBtns.forEach((ele) =>
    ele.addEventListener("click", handleAddReviewClick)
  );
};

const showForm = () => {
  document.getElementById("rating-form").style.display = "block";
};
const hideForm = () => {
  document.getElementById("rating-form").style.display = "none";
};

const resetForm = () => {
  const input = document.querySelectorAll("#rating-form input[type='text']")[0];
  const stars = document.querySelectorAll("#rating-form .stars-container")[0];
  input.value = "";
  stars.dataset.rating = 1;
};

const handleAddReviewClick = (e) => {
  e.stopPropagation();
  const productId = e.target.dataset.productid;
  const form = document.querySelectorAll("#rating-form form")[0];
  form.dataset.productId = productId;
  showForm();
};

const handleRatingClick = (e) => {
  const stars = document.querySelectorAll("#rating-form .stars-container")[0];
  stars.dataset.rating = e.target.dataset.value;
};

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const review = formData.get("review");
  const ratingEle = e.target.querySelectorAll(".stars-container")[0];
  const rating = ratingEle.dataset.rating;
  const productId = e.target.dataset.productId;

  // Submit data to backend
  const url = `${BACKEND_URL}/review`;
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ review, rating, productId }),
  };

  try {
    await fetch(url, option);
    hideForm();
    renderProducts();
    resetForm();
  } catch (err) {
    console.error(err);
  }
};

const hideFormIfClickOutside = (e) => {
  const form = document.getElementById("rating-form");
  if (!form.contains(e.target) && form.style.display == "block") {
    hideForm();
  }
};

window.addEventListener("load", () => {
  renderProducts(); // Render products on page load event

  // Add event listners to form
  const form = document.querySelectorAll("#rating-form form")[0];
  const stars = document.querySelectorAll("#rating-form .star");
  const closeBtn = document.querySelectorAll("#rating-form .close-btn")[0];
  form.addEventListener("submit", handleFormSubmit);
  closeBtn.addEventListener("click", hideForm);
  stars.forEach((star) => star.addEventListener("click", handleRatingClick));
  document.addEventListener("click", hideFormIfClickOutside);
});
