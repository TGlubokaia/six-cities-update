import React from 'react';
import styled from '@emotion/styled';
import SortBlock from '../sort-block/sort-block';
import CitiesOffersList from '../cities-offers-list/cities-offers-list';

const OffersSection = styled.section`
  display: flex;
  width: 50%;
  margin-right: 2px;
  flex-direction: column;
  align-items: flex-start;
`
const OffersTitle = styled.h2`
  font-style: oblique;
  margin-bottom: 5px;
`

function CitiesLeftBlock() {
  return (
    <OffersSection>
      <h1 hidden>Offers</h1>
      <OffersTitle>
        312 places to stay in Amsterdam
      </OffersTitle>
      <SortBlock />
      <CitiesOffersList />
    </OffersSection>
  )
}

export default CitiesLeftBlock;
