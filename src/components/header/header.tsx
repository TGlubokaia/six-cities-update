import React from 'react';
import { Box, Container, AppBar, Toolbar } from '@mui/material';
import HeaderLogoBlock from '../header-logo-block/header-logo-block';
import HeaderMenuBlock from '../header-menu-block/header-menu-block';


const Header: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <AppBar
          position='relative'
          color='transparent'
          sx={{ boxShadow: 'none' }}>
          <Toolbar disableGutters>
            <HeaderLogoBlock />
            <HeaderMenuBlock />
          </Toolbar>
        </AppBar>

      </Container>
    </Box>
  )
};

export default Header;
