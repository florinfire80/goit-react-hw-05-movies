import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieById } from 'service/api';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import Button from '../../common/Button/Button';
import Loading from 'common/Loading/Loading';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const numericMovieId = parseInt(movieId, 10);
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetailsData = await searchMovieById(movieId);
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <Loading />;
  }

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;

  const userScore = Math.round(vote_average * 10);

  const getDefaultImage = () => {
    return 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClick} className="custom-style">
        Go Back
      </Button>
      <div className={styles.container_details}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : getDefaultImage()
          }
          alt={original_title}
          className={styles.poster}
        />
        <div className={styles.container.data}>
          <h2 className={styles.title}>{original_title}</h2>
          <p className={styles.releaseDate}>
            <strong>Release Date:</strong>{' '}
            {release_date ? new Date(release_date).toLocaleDateString() : 'N/A'}
          </p>
          <p className={styles.userScore}>
            <strong>User score:</strong> {userScore || 'N/A'} %
          </p>
          <p className={styles.overview}>
            <strong>Overview:</strong> {overview || 'N/A'}
          </p>
          <p className={styles.genres}>
            <strong>Genres:</strong>{' '}
            {genres ? genres.map(genre => genre.name).join(', ') : 'N/A'}
          </p>
        </div>
      </div>
      <div className={styles.additional}>
        <p>Additional information</p>
        <h3 onClick={() => setShowCast(!showCast)}>Cast</h3>
        {showCast && <Cast movieId={numericMovieId} />}
        <h3 onClick={() => setShowReview(!showReview)}>Reviews</h3>
        {showReview && <Reviews movieId={numericMovieId} />}
      </div>
    </div>
  );
};

export default MovieDetails;
