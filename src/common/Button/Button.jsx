import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ className }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button className={`${styles.button} ${className}`} onClick={handleGoBack}>
      <span className={styles.icon}>&#x2190;</span> Go Back
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
