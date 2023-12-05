// MoviesList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies, searchMovieByKeyword } from '../../service/api';
import styles from './Movies.List.module.css';

const MoviesList = ({ searchKeyword }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchKeyword) {
          // Dacă există un cuvânt cheie, efectuează căutarea
          const searchData = await searchMovieByKeyword(searchKeyword);
          if (searchData && searchData.results) {
            setMovies(searchData.results);
          }
        } else {
          // Altfel, obține filmele trending
          const trendingData = await getTrendingMovies();
          if (trendingData && trendingData.results) {
            setMovies(trendingData.results);
          }
        }
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
        {movies.map(
          movie =>
            movie.title && (
              <li key={movie.id} className={styles.movieItem}>
                <Link to={`/movie/${movie.id}`} className={styles.movieLink}>
                  {movie.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MoviesList;
