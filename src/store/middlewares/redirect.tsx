import { ActionType } from '../action';

const redirect = (_store) => (next) => (action) => {
  return next(action);
};

export { redirect };
