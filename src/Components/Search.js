import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from './Filter';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center my-4">
      <input
        type="text"
        placeholder="Search Cryptocurrency"
        onChange={(e) => filter(e, dispatch)}
        className="bg-gray-200 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
      <p className="text-gray-500 text-sm mt-2">
        Data from{' '}
        <a href="https://www.coingecko.com/" target="_blank" rel="noreferrer">
          CoinGecko
        </a>
      </p>
    </div>
  );
};

export default Search;
