export type CityData = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  },
  cityName: string;
};

export type CityName = string;

export type Point = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Points = Point[];

export type Offer = {
  id: number;
  type: string;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    },
    name: string;
  },
  goods: string[];
  bedrooms: number;
  maxAdults: number;
  title: string;
  desc: string;
  price: number;
  previewImage: string;
  images: string[];
  rating: number;
  host: {
    avatarUrl: string;
    id: number;
    hostName: string;
    isPro: boolean;
  },
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  },
  isPremium: boolean;
  isFavorite: boolean;
};

export type Offers = Offer[] | [];

export type NameSpaceKeys = {
  DATA: 'DATA';
  FILTER: 'FILTER';
};
