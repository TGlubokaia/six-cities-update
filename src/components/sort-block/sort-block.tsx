import React from 'react';
import { List, ListItemButton, ListItemText, MenuItem, Menu, Typography, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled'

const SortWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const SortText = styled(Typography)`
  font-size: 12px;
  line-height: 1.167;
  font-weight: 700;
`

const SortItemButton = styled(ListItemButton)`
  padding: 0;
  margin-left: 10px;
`

const options = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];


function SortBlock() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SortWrapper>
      <SortText variant="caption">
        Sort by
      </SortText>
      <List
        aria-label="Sort options"
      >
        <SortItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Popular"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            // primary="When device is locked"
            secondary={options[selectedIndex]}
          />
          <KeyboardArrowDownIcon />
        </SortItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </SortWrapper>
  );
}

export default SortBlock;