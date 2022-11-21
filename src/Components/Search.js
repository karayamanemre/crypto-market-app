import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from './Filter';
import styles from './Styles/Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Cryptocurrency"
        onChange={(e) => filter(e, dispatch)}
        className={styles.search_input}
      />
      <p>Data from <a href="https://www.coingecko.com/" target="_blank" rel="noreferrer">CoinGecko</a></p>
    </div>
  );
};

export default Search;
