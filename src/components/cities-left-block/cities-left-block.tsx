import React from 'react';
import {  Typography } from '@mui/material';
import SortBlock from '../sort-block/sort-block';
import CitiesOffersList from '../cities-offers-list/cities-offers-list';

function CitiesLeftBlock() {
  return (
    <section >
      <h1 hidden>Offers</h1>
      <Typography variant="caption">
        312 places to stay in Amsterdam
      </Typography>
      <SortBlock />
      <CitiesOffersList />
    </section>
  )
}

export default CitiesLeftBlock;
