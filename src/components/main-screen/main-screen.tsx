import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled'
import Header from '../header/header';
import FilterBlock from '../filter-block/filter-block';
import Cities from '../cities/cities';

const MainScreenBlock = styled.div`
  color: #383838;
`

function MainScreen() {

  return (
    <MainScreenBlock>
      <CssBaseline />
      <Header />
      <FilterBlock />
      <Cities />
    </MainScreenBlock>

  )
}

export default MainScreen;
