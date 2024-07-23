import React from 'react';
import { Box, Button } from '@mui/material';

const Pagination = ({ pageNumber, setPageNumber }) => {
  const handleNextClick = () => setPageNumber(pageNumber + 1);
  const handlePrevClick = () => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      my={5}
      sx={{ position: 'relative', top: '20px' }} 
    >
      <Button variant="contained" onClick={handlePrevClick} sx={{ mr: 2 }}>
        Prev
      </Button>
      <Button variant="contained" onClick={handleNextClick}>
        Next
      </Button>
    </Box>
  );
};

export default Pagination;