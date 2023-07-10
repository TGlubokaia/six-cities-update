import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { Box, Container, Typography, List } from '@mui/material';
import { getSelectedCityName } from '../../store/offers-filter/selectors';
import { changeCity } from '../../store/action';
import { CityName } from '../../types/types';
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
`;

const CitiesList = styled(List)`
  display: flex;
`;

const FilterBlock: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector(getSelectedCityName);

  const handleCityOnClick = (city: CityName) => {
    dispatch(changeCity(city));
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container component='section' maxWidth="lg">
        <FilterTitle variant='h2'>
          Filter by city
        </FilterTitle>
        <CitiesList aria-label="Filter options">
          {citiesNames.map((cityName: CityName) => (
            <FilterItem key={cityName} city={cityName} selectedCity={selectedCity} cityOnClickHAndler={handleCityOnClick} />
          ))}
        </CitiesList>
      </Container>
    </Box>
  )
};

export default FilterBlock;
