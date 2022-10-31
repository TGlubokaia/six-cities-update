import { Offer, Offers } from "../types/types";

const offerAdapter = function (offer: Offer) {
  return offer;
};

const offersAdapter = (serverOffers: Offers | []) => serverOffers.length ? serverOffers.map((offer) => offerAdapter(offer)) : [];


export { offerAdapter, offersAdapter };
