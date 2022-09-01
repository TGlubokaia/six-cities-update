import React from 'react';
import styled from '@emotion/styled'
import {  Typography } from '@mui/material';
import SortBlock from '../sort-block/sort-block';
import CitiesOffersList from '../cities-offers-list/cities-offers-list';

const OffersSection = styled.section`
  display: flex;
  width: 50%;
  margin-right: 2px;
  flex-direction: column;
  align-items: flex-start;
`


function CitiesLeftBlock() {
  return (
    <OffersSection>
      <h1 hidden>Offers</h1>
      <Typography variant="caption">
        312 places to stay in Amsterdam
      </Typography>
      <SortBlock />
      <CitiesOffersList />
    </OffersSection>
  )
}

export default CitiesLeftBlock;
