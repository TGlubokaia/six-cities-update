import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Typography, List } from '@mui/material';
import { citiesNames } from '../../utils/cities';
import FilterItem from '../filter-item/filter-item';

const FilterTitle = styled(Typography)`
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
`

const CitiesList = styled(List)`
  display: flex;
`


function FilterBlock() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container component='section' maxWidth="lg">
        <FilterTitle variant='h2'>
          Filter by city
        </FilterTitle>
        <CitiesList aria-label="Filter options">
          {citiesNames.map(cityName => (
            <FilterItem key={cityName} />
          ))}
        </CitiesList>
      </Container>
    </Box>
  )
}

export default FilterBlock;
