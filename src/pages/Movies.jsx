import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/Movies.List/Movies.List';
import MovieDetails from './MovieDetails/MovieDetails';

const Movies = () => {
  const [searchParams, setSearchParams] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (typeof movieId === 'undefined') {
      return;
    }
    console.log('MovieId changed:', movieId);
  }, [movieId]);

  const handleGoBack = () => {
    if (searchParams.query) {
      navigate(`/movies?query=${searchParams.query}`);
    } else {
      navigate('/movies');
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {searchParams.query ? (
        <MoviesList searchKeyword={searchParams.query} />
      ) : movieId ? (
        <MovieDetails />
      ) : null}
      {searchParams.query && <button onClick={handleGoBack}>Go Back</button>}
    </div>
  );
};

export default Movies;
