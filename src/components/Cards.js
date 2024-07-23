import React from 'react';
import { Grid } from '@mui/material';
import CardComponent from './CardComponent';

const Cards = ({ results }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center" 
      alignItems="center" 
      sx={{ mb: 4, pt: 2 }} 
    >
      {results.map((character) => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3} >
          <CardComponent character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;