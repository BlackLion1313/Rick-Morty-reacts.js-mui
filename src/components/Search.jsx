import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const Search = ({ setSearch, setSelectedStatus, selectedStatus }) => { 
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setSearch(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setSelectedStatus(status === 'All' ? null : status);
  };

  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' mb={5} sx={{ mt: 4 }}>
      <TextField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder='Search...'
        type='text'
        variant='outlined'
        size='medium'
        margin='normal'
        sx={{
          width: '50%',
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            boxShadow: 3,
          },
          '& .MuiOutlinedInput-input': {
            padding: '12px 14px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
        }}
      />
      <Box display='flex' justifyContent='center' mt={2}>
        {['All', 'Alive', 'Dead'].map((status, index) => (
          <Button
            key={index}
            variant={selectedStatus === (status === 'All' ? null : status) ? 'contained' : 'outlined'}
            onClick={() => handleStatusFilter(status)}
            sx={{ mx: 1 }}
          >
            {status}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Search;

