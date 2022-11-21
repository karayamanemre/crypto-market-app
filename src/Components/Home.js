import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrencies } from '../Redux/Currencies/currencies';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Styles/Home.module.css';
import Coin from './Coin';
import Search from './Search';

const Home = ({ page, set }) => {
  const data = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) dispatch(fetchCurrencies());
  }, [data.length, dispatch]);

  return (
    <div className={styles.container}>
      <h3>Search Crypto Currencies</h3>
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
                currentPrice={item.current_price}
                imageUrl={item.image}
                coinName={item.name}
              />
            </NavLink>
          ))
        ) : (
          <div>
            <h1>Loading...</h1>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
