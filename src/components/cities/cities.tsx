import React from 'react';
import styled from '@emotion/styled'
import { Container, Box } from '@mui/material';
import CitiesLeftBlock from '../cities-left-block/cities-left-block';
import CitiesRightBlock from '../cities-rigth-block/cities-rigth-block';

const CitiesContainer = styled(Container)`
  display: flex;
`

function Cities() {

  return (
    <Box>
      <CitiesContainer maxWidth="xl">
        <CitiesLeftBlock />
        <CitiesRightBlock />
      </CitiesContainer>
    </Box>

  )
}

export default Cities;