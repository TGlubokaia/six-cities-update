import { NameSpace } from '../../utils/const';
import { RootState, Store1, Store2 } from '../../types/store';

const getOffers = (state: Store1) => state[NameSpace.DATA as keyof Store1].initialOffers;

const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;

export { getOffers, getLoadedDataStatus };
