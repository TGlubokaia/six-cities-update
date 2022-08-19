import React from 'react';
import styled from '@emotion/styled'
import Logo from '../logo/logo';

const Wrapper = styled.div`
  margin-right: auto;
`

function HeaderLeftBlock() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>

  )
}

export default HeaderLeftBlock;
