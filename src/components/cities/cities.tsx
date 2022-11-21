import React from 'react';
import styled from '@emotion/styled'
import { Container, Box } from '@mui/material';
import CitiesOffersBlock from '../cities-offers-block/cities-offers-block';
import CitiesMapBlock from '../cities-map-block/cities-map-block';

const CitiesBox = styled(Box)`
  display: flex;
  flex-grow: 1;
  overflow-y: hidden;
`;

const CitiesContainer = styled(Container)`
  display: flex;
`;


const Cities: React.FC = () => {
  return (
    <CitiesBox>
      <CitiesContainer maxWidth="lg">
        <CitiesOffersBlock />
        <CitiesMapBlock />
      </CitiesContainer>
    </CitiesBox>
  )
};

export default Cities;