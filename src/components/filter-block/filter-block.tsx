import React from 'react';
import { Container, Box, List, ListItem, Link, ListItemText } from '@mui/material';



function FilterBlock() {

  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
      <List>
        <ListItem>
          <Link>
            <ListItemText>
              City
            </ListItemText>
          </Link>
        </ListItem>
      </List>
      </Container>
    </Box>

  )
}

export default FilterBlock;
