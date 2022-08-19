import React from 'react';
import { Container, Box } from '@mui/material';
import CitiesLeftBlock from '../cities-left-block/cities-left-block';
import CitiesRightBlock from '../cities-rigth-block/cities-rigth-block';


function Cities() {

  return (
    <Box sx={{ bgcolor: '#ebd5d5' }}>
      <Container maxWidth="xl">
        <CitiesLeftBlock />
        <CitiesRightBlock />
      </Container>
    </Box>

  )
}

export default Cities;