import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AxiosInstance } from 'axios';
import rootReducer from '../store/root-reducer';
import { store } from '../store/store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  AxiosInstance,
  AnyAction
>;
