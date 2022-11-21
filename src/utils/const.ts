import { NameSpaceKeys } from "../types/types";

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

const AppRoute = {
  ROOT: '/',
};

const APIRoute = {
  OFFERS: '/hotels',
};

const NameSpace: NameSpaceKeys = {
  DATA: 'DATA',
  FILTER: 'FILTER',
};

const getRating = (count: number) => Math.round(count) * 20;

const getPluralDesc = (count: number) => count > 1 || count === 0 ? 's' : '';


export {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, AppRoute, APIRoute, NameSpace, getRating, getPluralDesc};
