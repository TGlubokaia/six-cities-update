import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled'
import OfferItem from '../offer-item/offer-item';

const OffersGrid = styled(Grid)`
  overflow-y: auto;
  padding-right: 14px;
`

function CitiesOffersList() {
  return (
    <OffersGrid container spacing={2}>
      <Grid item xs={6}>
        <OfferItem />
      </Grid>
      <Grid item xs={6}>
        <OfferItem />
      </Grid>
      <Grid item xs={6}>
        <OfferItem />
      </Grid>
      <Grid item xs={6}>
        <OfferItem />
      </Grid>
      <Grid item xs={6}>
        <OfferItem />
      </Grid>
    
    </OffersGrid>
  )
}

export default CitiesOffersList;