import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import Cards from './components/Cards';
import Pagination from './pagination/Pagination';
import Search from './components/Search';
import axios from 'axios';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}${
            selectedStatus ? `&status=${selectedStatus}` : ''
          }`
        );
        setResults(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNumber, search, selectedStatus]);


  
  return (
    <Box className='App'>
      <Typography variant='h2' align='center' sx={{ my: 4 }}>
        Rick & Morty
      </Typography>
      <Search setSearch={setSearch} setSelectedStatus={setSelectedStatus} selectedStatus={selectedStatus} />
      <Container>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Cards results={results} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </>
        )}
      </Container>
    </Box>
  );
};

export default App;
