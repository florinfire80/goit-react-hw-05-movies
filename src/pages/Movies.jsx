import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/Movies.List/Movies.List';
import MovieDetails from './MovieDetails/MovieDetails';

const Movies = () => {
  const [searchParams, setSearchParams] = useState({});
  const { movieId } = useParams();

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {searchParams.query ? (
        <MoviesList searchKeyword={searchParams.query} />
      ) : movieId ? (
        <MovieDetails />
      ) : null}
    </div>
  );
};

export default Movies;
