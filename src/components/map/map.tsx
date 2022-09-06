import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled'

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


function Map() {
  return (
    <MapSection>
      <MapSectionTitle variant='h2'>
        Map
      </MapSectionTitle>
    </MapSection>
  )
}

export default Map;