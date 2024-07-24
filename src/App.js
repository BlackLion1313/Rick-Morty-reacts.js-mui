import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
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
  const [hasResults, setHasResults] = useState(true);

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
        setHasResults(response.data.results.length > 0);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
        setHasResults(false);
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNumber, search, selectedStatus]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h2' align='center' sx={{ my: 4, color: '#fff' }}>
          Rick & Morty
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', maxWidth: '1200px' }}>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <iframe
                src="https://giphy.com/embed/psmJf376CrS92Dy5wf"
                width="100%"
                height="auto"
                title="Rick and Morty Sticker 1"
                style={{ border: 'none', maxWidth: '300px', pointerEvents: 'none' }}
                allowFullScreen
              />
            </Box>
            <Box sx={{ flex: 4 }}>
              <Search setSearch={setSearch} setSelectedStatus={setSelectedStatus} selectedStatus={selectedStatus} hasResults={hasResults} />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <iframe
                src="https://giphy.com/embed/35nU79vBbeOm4"
                width="100%"
                height="auto"
                title="Rick Sanchez Sticker"
                style={{ border: 'none', maxWidth: '300px', pointerEvents: 'none' }}
                allowFullScreen
              />
            </Box>
          </Box>
        </Box>
        <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {loading ? (
            <Box display="flex" justifyContent="center" mt={5}>
              <CircularProgress />
            </Box>
          ) : hasResults ? (
            <>
              <Cards results={results} />
              <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </>
          ) : (
            <Typography variant="h5" align="center" sx={{ my: 4, color: '#fff' }}>
              No results found.
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default App;
