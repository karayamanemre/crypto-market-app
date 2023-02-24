import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCurrencies } from '../Redux/Currencies/currencies';
import BackToTop from './BackToTop';
import Coin from './Coin';
import Search from './Search';

const Home = ({ set }) => {
  const data = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) dispatch(fetchCurrencies());
  }, [data.length, dispatch]);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto p-4 bg-gray-100">
      <Search />
      <div className="flex flex-col gap-4 w-full">
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
          <div className="text-center">
            <h1 className="text-2xl">Loading...</h1>
          </div>
        )}
      </div>
      <BackToTop></BackToTop>
    </div>
  );
};

export default Home;
