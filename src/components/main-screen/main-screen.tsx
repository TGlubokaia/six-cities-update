import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../header/header';
import FilterBlock from '../filter-block/filter-block';
import Cities from '../cities/cities';


function MainScreen() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <FilterBlock />
      <Cities />
    </React.Fragment>

  )
}

export default MainScreen;
