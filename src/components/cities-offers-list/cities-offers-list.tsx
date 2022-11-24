import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled'
import { Offers } from '../../types/types';
import OfferItem from '../offer-item/offer-item';

const OffersGrid = styled(Grid)`
  overflow-y: auto;
  padding-right: 14px;
`;

type OffersListProps = {
  offers: Offers;
}


const CitiesOffersList: React.FC<OffersListProps> = ({ offers }) => {
  return (
    <OffersGrid container spacing={2}>
      {offers.map((offer) => (
        <Grid item xs={6} key={offer.id}>
          <OfferItem offer={offer} />
        </Grid>
      ))}
    </OffersGrid>
  )
};

export default CitiesOffersList;