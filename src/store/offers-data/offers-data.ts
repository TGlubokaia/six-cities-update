import { createReducer } from '@reduxjs/toolkit';
import { loadOffers } from '../action';
import { StoreData } from '../../types/store';

const initialState: StoreData = {
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
