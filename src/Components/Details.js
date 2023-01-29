import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
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
      <div className={styles.container}>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <ul className={styles.main_info}>
          <li>
            <h1>{details.name}</h1>
          </li>
          <li>
            <span>
              Rank #
              {details.market_cap_rank}
            </span>
          </li>
          <li className={styles.img}>
            {details.image ? (
              <img src={details.image.small} alt="coin logo" />
            ) : null}
            {details.symbol ? <p>{details.symbol.toUpperCase()}</p> : null}
          </li>
          <li>
            {details.market_data ? (
              <h2>
                Price $
                {details.market_data.current_price.usd.toLocaleString()}
              </h2>
            ) : null}
          </li>
        </ul>
        <ul className={styles.price_info}>
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
        <p 
          className={styles.description}
          dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
          details.description ? details.description.en : ''),
        }}></p>
      </div>
  );
};

export default Details;
