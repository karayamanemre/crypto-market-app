import { filterCurrencies } from '../Redux/Currencies/currencies';
import { dataFilter } from '../Redux/Currencies/currencies';

export const filter = (event, dispatch) => {
  const searchData = dataFilter.filter((item) =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  dispatch(filterCurrencies(searchData));
};
