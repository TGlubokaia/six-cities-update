import { Middleware, AnyAction } from 'redux';
import { RootState } from '../../types/store';

const redirect: Middleware<{}, RootState> = (_store) => (next) => (action: AnyAction) => {
  return next(action);
};

export { redirect };
