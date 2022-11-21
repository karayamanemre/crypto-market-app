import React from 'react';
import styles from './Styles/Coin.module.css';
/* eslint-disable */
const Coin = ({ marketRank, marketCap, coinSymbol, priceChange, currentPrice, imageUrl, coinName }) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_name}>
        <p>{marketRank}</p>
        <img src={imageUrl} alt={coinName} className={styles.image} />
        <p>{coinSymbol.toUpperCase()}</p>
      </div>
      <div className={styles.market_cap}>
        <p className={styles.italic}>Market Cap</p>
        <p>${marketCap.toLocaleString()}</p>
      </div>
      <div className={styles.prices}>
        <p className={styles.italic}>Price Change 24H {priceChange.toFixed(2)}%</p>
        <p>${currentPrice.toLocaleString()}</p>
      </div>
    </div>
  );/* eslint-enable */
};

export default Coin;
