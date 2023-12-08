import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../service/api';
import Loading from 'common/Loading/Loading';
import styles from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const reviewData = await getMovieReviews(movieId);
        setReviews(reviewData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchReviewData();
    }
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      {loading ? (
        <Loading />
      ) : reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <p className={styles.author}>Author: {review.author}</p>
              <p className={styles.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Reviews;
