import { createStore, combineReducers } from 'redux';
import currencyReducer from './Currencies/currencies';
import categoryReducer from './Category/categories';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  coins: currencyReducer,
  detail: categoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
