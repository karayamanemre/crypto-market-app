import { filterCurrencies, dataFilter } from '../Redux/Currencies/currencies';
/* eslint-disable */
export const filter = (event, dispatch) => {
  const searchData = dataFilter.filter((item) =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase())
  );/* eslint-enable */
  dispatch(filterCurrencies(searchData));
};
