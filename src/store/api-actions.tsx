import { loadOffers } from './action';
import { APIRoute } from '../utils/const';
import { offersAdapter } from '../service/adapter-api';
import { AppThunk } from '../types/store';


const fetchOffers = (): AppThunk => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => {
      const adaptedData = offersAdapter(data);
      dispatch(loadOffers(adaptedData));
    })
);

export { fetchOffers };
