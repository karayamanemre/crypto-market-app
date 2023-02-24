import React from 'react';
/* eslint-disable */
const Coin = ({
  marketRank,
  marketCap,
  coinSymbol,
  priceChange,
  currentPrice,
  imageUrl,
  coinName,
}) => {
  return (
    <div className="bg-white shadow rounded-lg px-4 py-2 w-full flex flex-col hover:shadow-md">
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 font-bold">{marketRank}</p>
          <p className="uppercase font-bold">{coinSymbol}</p>
        </div>
        <img src={imageUrl} alt={coinName} className="h-8 w-8" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-gray-500 font-bold">Market Cap</p>
          <p className="font-bold">${marketCap.toLocaleString()}</p>
        </div>
        <div className="flex flex-col hidden sm:block">
          <p className="text-gray-500 font-bold">Price Change 24H</p>
          <p className="font-bold">{priceChange.toFixed(2)}%</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 font-bold">Current Price</p>
          <p className="font-bold">${currentPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
/* eslint-enable */
export default Coin;
