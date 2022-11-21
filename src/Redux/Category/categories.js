const apiUrl = 'https://api.coingecko.com/api/v3/coins/';
/* eslint-disable */
const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'loadCategories':
      state = action.playload;
      return state;
    default:
      return state;
  }
};/* eslint-enable */
export const fetchCategory = (id) => async (dispatch) => {
  const res = await fetch(apiUrl + id);
  const data = await res.json();
  dispatch({
    type: 'loadCategories',
    playload: data,
  });
};

export default categoryReducer;
