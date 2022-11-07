import { createReducer } from '@reduxjs/toolkit';
import { loadOffers } from '../action';
import { Offers } from '../../types/types';

type StateType = {
  initialOffers: Offers,
  isDataLoaded: boolean
}

const initialState: StateType = {
  initialOffers: [],
  isDataLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.initialOffers = action.payload;
      state.isDataLoaded = true;
    })
});

export { offersData };
