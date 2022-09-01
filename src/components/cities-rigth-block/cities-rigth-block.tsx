import React from 'react';
import styled from '@emotion/styled'
import Map from '../map/map';

const Wrapper = styled.div`
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
