import React from 'react';
import { Typography, Stack, Button } from '@mui/material';


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  console.log(gifUrl)

  return (
    <Stack gap='80px' sx={{ flexDirection:{lg:'row'}, p:'30px', alignItems:'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack>
        <Typography>{name}</Typography>
        <Typography>
          Words are nice because they allow us to attach thoughts and meaning
          artifically and allow us to communicate verbally or abstract
        </Typography>

      </Stack>
    </Stack>

  )
}

export default Detail