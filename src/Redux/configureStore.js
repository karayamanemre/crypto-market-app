import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import currencyReducer from './Currencies/currencies';
import categoryReducer from './Category/categories';

const rootReducer = combineReducers({
  coins: currencyReducer,
  detail: categoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
