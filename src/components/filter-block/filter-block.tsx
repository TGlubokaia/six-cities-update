import React from 'react';
import styled from '@emotion/styled';
import { Container, Box, List} from '@mui/material';
import { citiesNames } from '../../utils/cities';
import FilterItem from '../filter-item/filter-item';

const CitiesList = styled(List)`
  display: flex;
`


function FilterBlock() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <CitiesList>
          {citiesNames.map(cityName => (
            <FilterItem key={cityName} />
          ))}
        </CitiesList>
      </Container>
    </Box>
  )
}

export default FilterBlock;
