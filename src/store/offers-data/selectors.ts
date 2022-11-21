import { NameSpace } from '../../utils/const';
import { Store } from '../../types/store';

const getOffers = (state: Store) => state[NameSpace.DATA].initialOffers;

const getLoadedDataStatus = (state: Store) => state[NameSpace.DATA].isDataLoaded;

export { getOffers, getLoadedDataStatus };
