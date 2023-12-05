import React, { useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter keyword"
      />
      <button className={styles.submitButton} type="submit">
        Search
      </button>
    </form>
  );
};

const SearchComponent = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SearchComponent;
