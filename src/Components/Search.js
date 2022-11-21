import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from './Filter';
import styles from './Styles/Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  return (
      <input
        type="text"
        placeholder="Search Cryptocurrency"
        onChange={(e) => filter(e, dispatch)}
        className={styles.search_input}
      />
  );
};

export default Search;
