import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import product from '../pages/Product/reducer';
import cart from '../pages/Cart/reducer';


const rootReducer = combineReducers({
  product,
  cart,
  routing: routerReducer
});

export default rootReducer;
