import React from 'react';
import styled from '@emotion/styled'

const MapSection = styled.section`
  width: 100%;
  align-self: stretch;
  background-image: url(../img/map@2x.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`

function Map() {
  return (
    <MapSection />
  )
}

export default Map;