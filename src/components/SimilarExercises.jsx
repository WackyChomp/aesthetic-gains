import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <Box sx={{ mt:{lg:'100px', xs:'0'} }}>
      <Typography variant='h3'>Exercises that target similar muscle group: </Typography>

      <Stack direction='row' sx={{ p:'2', position:'relative'}}>
        {/* If length exists it renders HorizontalScrollBar component, else renders Loader component */}
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} />
          : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises