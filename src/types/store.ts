import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AxiosInstance } from 'axios';
import rootReducer from '../store/root-reducer';
import { store } from '../store/store';
import { Offers } from './types';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  AxiosInstance,
  AnyAction
>;

export type StoreData = {
  initialOffers: Offers;
  isDataLoaded: boolean;
}

export type StoreFilter = {
  selectedCity: string;
};

export type Store1 = {
  'DATA': StoreData;
  'FILTER': StoreFilter;
};

export type Store2 = {
  'DATA': {
    initialOffers: Offers,
    isDataLoaded: boolean,
  },
  'FILTER': {
    selectedCity: string,
  };
}
