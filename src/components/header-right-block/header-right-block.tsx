import React from 'react';
import styled from '@emotion/styled'
import { Box, List, ListItem, Link, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const AuthList = styled(List)`
  display: flex;
`
const AuthLink = styled(Link)`
  display: flex;
  font-size: 14px;
  color: inherit;
  line-height: 1.2143;
  text-decoration: none;
  cursor: pointer;
  transition: text-shadow .3s;
  &:hover {text-shadow: 0.5px 0 0, -0.5px 0 0;}
  &:focus {text-shadow: 0.5px 0 0, -0.5px 0 0;}
`
const AuthText = styled(ListItemText)`
  display: flex;
  align-items: center;
`


function HeaderRightBlock() {
  return (
    <Box component="nav" aria-label="Authorization menu">
      <AuthList>
        <ListItem>
          <AuthLink href="href" aria-label="Open favorites">
            <ListItemAvatar>
              <Avatar alt="user avatar" src="../img/avatar.svg" />
            </ListItemAvatar>
            <AuthText>
              email@gmail.com
            </AuthText>
          </AuthLink>
        </ListItem>
        <ListItem>
          <AuthLink href="href" aria-label="Sigh out">
            <AuthText>
              Sigh out
            </AuthText>
          </AuthLink>
        </ListItem>
      </AuthList>
    </ Box>
  )
}

export default HeaderRightBlock;
