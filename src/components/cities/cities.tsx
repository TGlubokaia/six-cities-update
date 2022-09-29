import React from 'react';
import styled from '@emotion/styled'
import { Container, Box } from '@mui/material';
import CitiesLeftBlock from '../cities-offers-block/cities-offers-block';
import CitiesRightBlock from '../cities-map-block/cities-map-block';

const CitiesBox = styled(Box)`
  display: flex;
  flex-grow: 1;
  overflow-y: hidden;
`
const CitiesContainer = styled(Container)`
  display: flex;
`


function Cities() {
  return (
    <CitiesBox>
      <CitiesContainer maxWidth="lg">
        <CitiesLeftBlock />
        <CitiesRightBlock />
      </CitiesContainer>
    </CitiesBox>
  )
}

export default Cities;