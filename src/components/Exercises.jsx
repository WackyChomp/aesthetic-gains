import React, { useEffect, useState} from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchAPIData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises, setExercises, bodyPart }) => {

  console.log(exercises)

  const [currentPage, setCurrentPage] = useState(1);


  //Pagination
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top:1800, behavior:'smooth' })
  }
  

  return (
    <Box id='exercises'
    sx={{ mt:{lg:'110px'}}} mt='50px' p='20px'
    >

      {/* Header for results showing */}      
      <Typography variant='h3' mb='48px'>
        Showing Them Results
      </Typography>

      {/* Displaying cards from ExerciseCard component */}
      <Stack direction='row'
      sx={{ gap: {lg:'110px', xs:'50px'}}}
      flexWrap='wrap'
      justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>

      {/* Pagination */}
      <Stack mt='100px' alignItems='center'>
          {exercises.length > exercisesPerPage && (
            <Pagination 
              color='standard'
              shape='rounded'
              size='large'
              defaultPage={1}
              count={Math.ceil(exercises.length / 9)}
              page={currentPage}    // usestate
              onChange={paginate}   // function
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises