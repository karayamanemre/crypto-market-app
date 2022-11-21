import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '../Redux/Category/categories';
import styles from './Styles/Details.module.css';

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.coinId;
  const details = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchCategory(id));
  }, [dispatch, id]);
  return (
    <section>
      <div className={styles.container}>
        <h1>{details.name}</h1>
        <span>
          Rank #{
          details.market_cap_rank}</span>
        {details.image ? (
          <img src={details.image.small} alt="coin logo" />
        ) : null}
        {details.symbol ? <p>{details.symbol.toUpperCase()}</p> : null}
        {details.market_data ? (
          <h1>
            $
            {details.market_data.current_price.usd.toLocaleString()}
          </h1>
        ) : null}
        <ul>
          <li>
            <h4>24 Hour Change:</h4>
            {details.market_data?.price_change_percentage_24h_in_currency
              ? details.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                1,
              )
              : null}
              {' '}
            %
          </li>
          <li>
            <h4>24 Hour Low:</h4>
            {details.market_data?.low_24h ? (
              <p>
                $
                {details.market_data.low_24h.usd.toLocaleString()}
              </p>
            ) : null}
          </li>
          <li>
            <h4>24 Hour High:</h4>
            {details.market_data?.high_24h ? (
              <p>
                $
                {details.market_data.high_24h.usd.toLocaleString()}
              </p>
            ) : null}
          </li>
          <li>
            <h4>Market Cap:</h4>
            {details.market_data?.market_cap ? (
              <p>
                $
                {details.market_data.market_cap.usd.toLocaleString()}
              </p>
            ) : null}
          </li>
          <li>
            <h4>Circulating Supply:</h4>
            {details.market_data?.circulating_supply ? (
              <p>
                $
                {details.market_data.circulating_supply.toLocaleString()}
              </p>
            ) : null}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
