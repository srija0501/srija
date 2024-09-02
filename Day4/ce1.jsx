import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';

const MostInfluentialBooks = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="The Holy Bible"
            secondary="Religious text of Christianity, considered sacred and canonical."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="Quotations from Chairman Mao"
            secondary="Collection of statements from speeches and writings by Mao Zedong."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="Harry Potter series"
            secondary="Fantasy novels by J.K. Rowling, following the life of a young wizard."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="The Quran"
            secondary="The holy book of Islam, believed to be the word of God as revealed to Muhammad."
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="The Republic by Plato"
            secondary="Philosophical work by Plato discussing justice and the just city-state."
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default MostInfluentialBooks;
