// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieById } from 'service/api';

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
    popularity,
    overview,
    genre_ids,
  } = movieDetails;

  return (
    <div>
      <h2>{original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <p>
        <strong>Release Date:</strong>{' '}
        {new Date(release_date).toLocaleDateString()}
      </p>
      <p>
        <strong>Popularity:</strong> {popularity}
      </p>
      <p>
        <strong>Overview:</strong> {overview}
      </p>
      <p>
        <strong>Genre IDs:</strong> {genre_ids.join(', ')}
      </p>
    </div>
  );
};

export default MovieDetails;
