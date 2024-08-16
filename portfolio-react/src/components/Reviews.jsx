import { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      let response = await fetch("http://localhost:8888/api/reviews");
      let data = await response.json();
      setReviews(data);
    };
    getReviews();
  }, []);

  return (
    <section id="reviews">
      <div className="reviews-block">
        <h2 className="section-heading">Let's Hear from Others.</h2>
        <div className="reviews-block-list">
          {reviews.map((review, index) => (
            <div className="reviews-card" key={index}>
              <img
                className="pattern"
                src="images/elements/testimonials-circles.svg"
                alt=""
                aria-hidden="true"
              />
              <blockquote>{review.quote}</blockquote>
              <div className="reviews-card-footer">
                <div className="reviews-card-image">
                  <img
                    src={`http://localhost:8888/${review.reviewer.image}`}
                    alt={review.reviewer.name}
                  />
                </div>
                <div className="reviews-card-info">
                  <span className="reviewer-name">{review.reviewer.name}</span>
                  <span className="reviewer-title">
                    {review.reviewer.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
