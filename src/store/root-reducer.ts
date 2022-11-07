import { combineReducers } from 'redux';
import { offersData } from './offers-data/offers-data';
import { offersFilter } from './offers-filter/offers-filter';
import { NameSpace } from '../utils/const';

const rootReducer = combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.FILTER]: offersFilter,
});

export default rootReducer;
