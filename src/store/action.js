import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  SORT_OFFERS_LIST: 'offers/sortOffers',
  LOAD_OFFERS: 'offers/loadOffers',
};

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

const sortOffers = createAction(ActionType.SORT_OFFERS_LIST, (type) => ({
  payload: type,
}));

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));


export { ActionType, changeCity, sortOffers, loadOffers };
