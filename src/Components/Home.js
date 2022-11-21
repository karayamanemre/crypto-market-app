import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCurrencies } from '../Redux/Currencies/currencies';
import styles from './Styles/Home.module.css';
import Coin from './Coin';
import Search from './Search';
/* eslint-disable */
const Home = ({ set }) => {
  const data = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) dispatch(fetchCurrencies());
  }, [data.length, dispatch]);/* eslint-enable */
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.list_container}>
        {data.length > 0 ? (
          data.map((item) => (
            <NavLink
              to={`/coin/${item.id}`}
              key={item.id}
              onClick={() => set('coins')}
            >
              <Coin
                id={item.id}
                marketRank={item.market_cap_rank}
                image={item.image}
                coinSymbol={item.symbol}
                marketCap={item.market_cap}
                currentPrice={item.current_price}
                priceChange={item.price_change_percentage_24h}
                imageUrl={item.image}
                coinName={item.name}
              />
            </NavLink>
          ))
        ) : (
          <div>
            <h1>Loading...</h1>
            {' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
