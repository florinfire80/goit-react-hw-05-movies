import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../service/api';
import Loading from 'common/Loading/Loading';
import styles from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      const castData = await getMovieCredits(movieId);
      setCast(castData);
    };

    if (movieId) {
      fetchCastData();
    }
  }, [movieId]);

  const getDefaultImage = () => {
    return 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  };

  if (!cast.length) {
    return <Loading />;
  }

  return (
    <div className={styles.castContainer}>
      <div className={styles.gridContainer}>
        {cast.map(actor => (
          <div key={actor.id} className={styles.gridItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : getDefaultImage()
              }
              alt={actor.name}
              className={styles.actorImage}
            />
            <div className={styles.actorDetails}>
              <strong>{actor.name}</strong> Character: {actor.character}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;
