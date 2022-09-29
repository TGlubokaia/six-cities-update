import React from 'react';
import styled from '@emotion/styled';
import { ListItem, Link, ListItemText } from '@mui/material';

const CityItem = styled(ListItem)`
  margin-right: 36px;
  margin-bottom: 19px;
  padding: 0;
  width: auto;
`
const CityLink = styled(Link)`
  display: block;
  padding: 9px 21px 6px 11px;
  font-size: 19px;
  line-height: 1.211;
  font-weight: 300;
  font-style: oblique;
  transform: skew(-15deg);
  border-radius: 3px;
  transition: background .3s,color .3s,text-shadow .3s;

`


function FilterItem(props: { city: string, selectedCity: string, cityOnClickHAndler: Function }) {
  const { city, selectedCity, cityOnClickHAndler } = props;


  return (
    <CityItem onClick={() => cityOnClickHAndler(city)}>
      <CityLink
        variant={selectedCity === city ? "caption" : undefined}
        href="#"
        aria-label={`${city}`}>
        <ListItemText>
          {`${city}`}
        </ListItemText>
      </CityLink>
    </CityItem>
  )
}

export default FilterItem;
