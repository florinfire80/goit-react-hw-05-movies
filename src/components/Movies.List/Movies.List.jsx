import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies, searchMovieByKeyword } from '../../service/api';
import styles from './Movies.List.module.css';

const MoviesList = ({ searchKeyword }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchData = searchKeyword
          ? await searchMovieByKeyword(searchKeyword)
          : null;
        const trendingData = !searchKeyword ? await getTrendingMovies() : null;

        setMovies(searchData?.results || trendingData?.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchKeyword]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {searchKeyword
          ? `Search results for "${searchKeyword}"`
          : 'Trending today movies'}
      </h2>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
