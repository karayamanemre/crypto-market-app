import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from './Filter';
import styles from './Styles/Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => filter(e, dispatch)}
        className={styles.search_input}
      />
    </div>
  );
};

export default Search;
