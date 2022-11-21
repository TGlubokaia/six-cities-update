import { NameSpace } from '../../utils/const';
import { Store } from '../../types/store';

const getSelectedCityName = (state: Store) => state[NameSpace.FILTER].selectedCity;

export {getSelectedCityName};
