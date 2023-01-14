import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop:{lg:'200px', xs:'20px'} }}>
      <Typography variant='h3' mb='35px'>
        Watch <span style={{color:'orangered', fontWeight:'bold', textTransform:'capitalize', textDecoration:'underline'}}>"{name}"</span> exercise videos
      </Typography>
    </Box>
  )
}

export default ExerciseVideos