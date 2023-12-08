import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItems}>
            <Link
              to="/"
              className={`${styles.navLink} ${
                location.pathname === '/' ? styles.isActive : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={`${styles.navLink} ${
                location.pathname.startsWith('/movie') ? styles.isActive : ''
              }`}
            >
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
