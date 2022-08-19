import React from 'react';
import { List, ListItem, Link, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

function HeaderRightBlock() {
  return (
    <nav aria-label="authorization">
      <List>
        <ListItem>
          <Link>
            <ListItemAvatar>
              <Avatar alt="user avatar" src="../img/avatar.svg" />
            </ListItemAvatar>
            <ListItemText>
                Name Surname
              </ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListItemText>
              Sigh out
            </ListItemText>
          </Link>
        </ListItem>
      </List>
    </ nav>

  )
}

export default HeaderRightBlock;
