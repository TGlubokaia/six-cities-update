import { configureStore } from '@reduxjs/toolkit';
import createAPI from '../service/api';
import { redirect } from './middlewares/redirect';
import rootReducer from '../store/root-reducer';


const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)),
});

export {api, store};
