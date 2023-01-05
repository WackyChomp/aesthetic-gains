import React from 'react';
import { Link } from 'react-router-dom';        // eventually link to ExerciseDetail component
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      
      <Stack direction='row'>
        <Button sx={{ ml:'21px', color:'blue', background:'yellow', fontSize: '20px', 
          borderRadius:'20px', textTransform:'capitalize'
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml:'21px', color:'white', background:'red', fontSize: '20px', 
          borderRadius:'20px', textTransform:'capitalize'
        }}>
          {exercise.target}
        </Button>
      </Stack>

      <Typography ml='25px' color='green' fontWeight='bold' mt='20px' pb='15px' fontSize='20px' textTransform='capitalize'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard