import { NameSpace } from '../../utils/const';

const getSelectedCityName = (state) => state[NameSpace.FILTER].selectedCity;

export {getSelectedCityName};
