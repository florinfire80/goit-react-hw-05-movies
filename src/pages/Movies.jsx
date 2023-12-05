// Movies.jsx
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/Movies.List/Movies.List';

const Movies = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {searchParams.query && <MoviesList searchKeyword={searchParams.query} />}
    </div>
  );
};

export default Movies;
