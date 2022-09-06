import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled'
import Map from '../map/map';

const Wrapper = styled(Box)`
  display: flex;
  flex-grow: 1;
`


function CitiesRightBlock() {
  return (
    <Wrapper>
      <Map />
    </Wrapper>
  )
}

export default CitiesRightBlock;
