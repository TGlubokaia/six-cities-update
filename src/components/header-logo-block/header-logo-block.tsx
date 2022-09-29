import React from 'react';
import styled from '@emotion/styled'
import Logo from '../logo/logo';

const Wrapper = styled.div`
  margin-right: auto;
`


function HeaderLogoBlock() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>

  )
}

export default HeaderLogoBlock;
