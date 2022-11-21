import React from 'react';
import styles from './Styles/Coin.module.css';
/* eslint-disable */
const Coin = ({ coinSymbol, currentPrice, imageUrl, coinName }) => {
  return (
    <div className={styles.coin_container}>
      <img src={imageUrl} alt={coinName} className={styles.image} />
      <p>{coinSymbol.toUpperCase()}</p>
      <p>
        $
        {currentPrice.toLocaleString()}
      </p>
    </div>
  );/* eslint-enable */
};

export default Coin;
