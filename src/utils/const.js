const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

const AppRoute = {
  ROOT: '/',
};

const APIRoute = {
  OFFERS: '/hotels',
};

const getRating = (count) => Math.round(count) * 20;

const getPluralDesc = (count) => count > 1 || count === 0 ? 's' : '';


export {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, AppRoute, APIRoute, getRating, getPluralDesc};
