import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
          border: '10px solid crimson',
          background:'palevioletred',
          borderRadius:'20px',
          width:'250px',
          height:'250px',
          cursor:'pointer',
          gap:'20px',
          margin:'15px'
      }}
      onClick={ ()=>{
        setBodyPart(item);
      }}
    >
      <img src='https://img.icons8.com/emoji/96/null/construction-emoji.png' alt='icon'
      style={{ width:'40px', height:'40px'}}
      />
      <Typography fontSize='25px' fontWeight='bold' color='purple' textTransform='capitalize'>
        {item}
      </Typography>
      <p>Exercise</p>
      <br />
    </Stack>
  )
}

export default BodyPart