// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieById } from 'service/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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
    return <p>Loading...</p>;
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

  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        className={styles.poster}
      />
      <div className={styles.container.data}>
        <h2 className={styles.title}>{original_title}</h2>
        <p className={styles.releaseDate}>
          <strong>Release Date:</strong>{' '}
          {new Date(release_date).toLocaleDateString()}
        </p>
        <p className={styles.userScore}>
          <strong>User score:</strong> {userScore} %
        </p>
        <p className={styles.overview}>
          <strong>Overview:</strong> {overview}
        </p>
        <p className={styles.genres}>
          <strong>Genres:</strong> {genres.map(genre => genre.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
