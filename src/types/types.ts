export type City = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  cityName: string,
};

export type Point = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type Points = Point[];
