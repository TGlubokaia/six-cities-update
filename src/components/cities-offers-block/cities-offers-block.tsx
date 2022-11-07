import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import SortBlock from '../sort-block/sort-block';
import CitiesOffersList from '../cities-offers-list/cities-offers-list';

const OffersSection = styled.section`
  display: flex;
  width: 50%;
  margin-right: 2px;
  padding-top: 29px;
  padding-bottom: 7px;
  flex-direction: column;
  align-items: flex-start;
`

const OffersTitle = styled(Typography)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`

const OffersInfo = styled(Typography)`
  margin-bottom: 22px;
  padding-left: 2px;
  font-size: 24px;
  line-height: 1.167;
  font-weight: 700;
  font-style: oblique;
`

function CitiesOffersBlock() {
  return (
    <OffersSection>
      <OffersTitle variant='h2'>
        Offers
      </OffersTitle>
      <OffersInfo>
        312 places to stay in Amsterdam
      </OffersInfo>
      <SortBlock />
      <CitiesOffersList />
    </OffersSection>
  )
}

export default CitiesOffersBlock;
