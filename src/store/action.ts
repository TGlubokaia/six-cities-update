import { createAction } from '@reduxjs/toolkit';
import { CityName, Offers } from '../types/types';


const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  LOAD_OFFERS: 'offers/loadOffers',
};

const changeCity = createAction(ActionType.CHANGE_CITY, (city: CityName) => ({
  payload: city,
}));

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers: Offers) => ({
  payload: offers,
}));


export { ActionType, changeCity, loadOffers };
