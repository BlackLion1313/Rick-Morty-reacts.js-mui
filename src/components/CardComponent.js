import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const CardComponent = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { name, image, location, status, species, gender } = character;

  return (
    <Box
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      sx={{
        width: '280px', // Фиксированная ширина карточки
        height: '370px', // Фиксированная высота карточки
        margin: '20px', // Пространство между карточками
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'relative',
        }}
      >
        {/* Основная сторона карточки */}
        <Box
          sx={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid',
            borderRadius: '8px',
            boxShadow: 3,
            backgroundColor: 'white',
            textAlign: 'center', // Выравнивание текста по центру
          }}
        >
          <Box sx={{ width: '100%', height: '60%', overflow: 'hidden' }}>
            <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              {name}
            </Typography>
            <Typography>Last location: {location.name}</Typography>
            <Typography>Status: {status}</Typography>
          </Box>
        </Box>

        {/* Обратная сторона карточки */}
        <Box
          sx={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid',
            borderRadius: '8px',
            boxShadow: 3,
            backgroundColor: 'white',
            textAlign: 'center', // Выравнивание текста по центру
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            {name}
          </Typography>
          <Typography>Status: {status}</Typography>
          <Typography>Species: {species}</Typography>
          <Typography>Gender: {gender}</Typography>
          <Typography>Location: {location.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComponent;
