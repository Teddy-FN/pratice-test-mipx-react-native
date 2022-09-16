import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {getLoginReducers} from './signIn/reducer';
import {getCategoryReducers} from './category/reducer';
import {getProductsReducers} from './product/reducer';

const rootReducer = combineReducers({
  getLoginReducers,
  getCategoryReducers,
  getProductsReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
