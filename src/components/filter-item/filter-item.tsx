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
  text-decoration: none;
  color: inherit;
  font-size: 19px;
  line-height: 1.211;
  font-weight: 300;
  font-style: oblique;
  cursor: pointer;
  transform: skew(-15deg);
  border-radius: 3px;
  transition: background .3s,color .3s,text-shadow .3s;
  &:hover {text-shadow: 0.5px 0 0, -0.5px 0 0;}
  &:focus {text-shadow: 0.5px 0 0, -0.5px 0 0;}
`


function FilterItem() {
  return (
    <CityItem>
      <CityLink>
        <ListItemText>
          {"Amsterdam"}
        </ListItemText>
      </CityLink>
    </CityItem>
  )
}

export default FilterItem;
