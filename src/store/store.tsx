import { configureStore } from '@reduxjs/toolkit';
import createAPI from '../service/api';
import { redirect } from '../store/middlewares/redirect';
import rootReducer from '../store/root-reducer';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)),
});

export default store;