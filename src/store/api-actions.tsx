import { loadOffers } from './action';
import { APIRoute } from '../utils/const';
import { offersAdapter } from '../service/adapter-api';


const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => {
      const adaptedData = offersAdapter(data);
      dispatch(loadOffers(adaptedData));
    })
);

export { fetchOffers };
