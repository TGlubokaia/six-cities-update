import React from 'react';
import { Box, Container, AppBar, Toolbar } from '@mui/material';
import HeaderLeftBlock from '../header-left-block/header-left-block';
import HeaderRightBlock from '../header-right-block/header-right-block';


function Header() {

  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container maxWidth="xl">
        <AppBar
          position='relative'
          color='transparent'
          sx={{ boxShadow: 'none' }}>
          <Toolbar disableGutters>
            <HeaderLeftBlock />
            <HeaderRightBlock />
          </Toolbar>
        </AppBar>

      </Container>
    </Box>


  )
}

export default Header;
