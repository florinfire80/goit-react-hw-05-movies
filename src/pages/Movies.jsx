// Movies.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/Movies.List/Movies.List';

const Movies = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {searchParams.query && <MoviesList searchKeyword={searchParams.query} />}
    </div>
  );
};

export default Movies;
