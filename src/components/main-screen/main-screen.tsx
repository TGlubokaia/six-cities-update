import React from 'react';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled'
import Header from '../header/header';
import FilterBlock from '../filter-block/filter-block';
import Cities from '../cities/cities';

const MainScreenBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainTitle = styled(Typography)`
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
`;


const MainScreen: React.FC = () =>  {
  return (
    <MainScreenBlock>
      <CssBaseline />
      <MainTitle variant="h1">
        Available offers in the 6 sities
      </MainTitle>
      <Header />
      <FilterBlock />
      <Cities />
    </MainScreenBlock>
  )
};

export default MainScreen;
