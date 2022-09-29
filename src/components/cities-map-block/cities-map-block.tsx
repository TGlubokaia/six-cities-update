import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled'

const Wrapper = styled(Box)`
  display: flex;
  flex-grow: 1;
`

const MapSection = styled.section`
  width: 100%;
  align-self: stretch;
  background-image: url(../img/map@2x.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`

const MapSectionTitle = styled(Typography)`
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

function CitiesRightBlock() {
  return (
    <Wrapper>
      <MapSection>
        <MapSectionTitle variant='h2'>
          Map
        </MapSectionTitle>
      </MapSection>
    </Wrapper>
  )
}

export default CitiesRightBlock;
