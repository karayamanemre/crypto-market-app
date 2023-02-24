import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import { fetchCategory } from '../Redux/Category/categories';
/* eslint-disable */
const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.coinId;
  const details = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchCategory(id));
  }, [dispatch, id]);
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <Link to="/" className="block mb-4">
        <button className="bg-gray-800 text-white hover:bg-gray-700 font-bold py-2 px-4 rounded">
          Home
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h1 className="text-3xl font-bold">{details.name}</h1>
          <p className="text-gray-500">Rank #{details.market_cap_rank}</p>
          <div className="flex items-center my-4">
            {details.image && (
              <img
                src={details.image.small}
                alt="coin logo"
                className="h-10 w-10 mr-4"
              />
            )}
            {details.symbol && (
              <p className="uppercase font-bold text-xl">
                {details.symbol.toUpperCase()}
              </p>
            )}
          </div>
          <div className="mb-4">
            {details.market_data?.current_price && (
              <h2 className="text-2xl font-bold">
                Price ${details.market_data.current_price.usd.toLocaleString()}
              </h2>
            )}
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <ul className="list-disc list-inside">
            <li className="mb-4 flex">
              <h4 className="font-bold">24 Hour Change:</h4>
              {details.market_data?.price_change_percentage_24h_in_currency ? (
                <p>
                  {details.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    1,
                  )}
                  %
                </p>
              ) : (
                <p>Unavailable</p>
              )}
            </li>
            <li className="mb-4 flex">
              <h4 className="font-bold">24 Hour Low:</h4>
              {details.market_data?.low_24h ? (
                <p>${details.market_data.low_24h.usd.toLocaleString()}</p>
              ) : (
                <p>Unavailable</p>
              )}
            </li>
            <li className="mb-4 flex">
              <h4 className="font-bold">24 Hour High:</h4>
              {details.market_data?.high_24h ? (
                <p>${details.market_data.high_24h.usd.toLocaleString()}</p>
              ) : (
                <p>Unavailable</p>
              )}
            </li>
            <li className="mb-4 flex">
              <h4 className="font-bold">Market Cap:</h4>
              {details.market_data?.market_cap ? (
                <p>${details.market_data.market_cap.usd.toLocaleString()}</p>
              ) : (
                <p>Unavailable</p>
              )}
            </li>
            <li className="flex">
              <h4 className="font-bold">Circulating Supply:</h4>
              {details.market_data?.circulating_supply ? (
                <p>{details.market_data.circulating_supply.toLocaleString()}</p>
              ) : (
                <p>Unavailable</p>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div
        className="my-8"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            details.description ? details.description.en : '',
          ),
        }}
      ></div>
    </div>
  );
};
/* eslint-enable */
export default Details;
