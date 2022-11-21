const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export let dataFilter;

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'load':
      state = action.playload;
      return state;
    default:
      return state;
  }
};

export const fetchCurrencies = () => async (dispatch) => {
  const res = await fetch(url);
  const data = await res.json();
  dataFilter = data;
  dispatch({
    type: 'load',
    playload: data,
  });
};

export const filterCurrencies = (data) => {
  return {
    type: 'load',
    playload: data,
  };
};

export default reducer;
