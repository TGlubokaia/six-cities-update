import { combineReducers } from 'redux';
import { offersData } from './offers-data/offers-data';
import { offersFilter } from './offers-filter/offers-filter';
import { NameSpace } from '../const';

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.FILTER]: offersFilter,
});
