import React from 'react';
import { Grid } from '@mui/material';
import OfferItem from '../offer-item/offer-item';


function CitiesOffersList() {
  return (
    <Grid container spacing={2}>
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
    </Grid>
  )
}

export default CitiesOffersList;