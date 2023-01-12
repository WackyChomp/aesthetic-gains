import React from 'react';
import { Typography, Stack, Button } from '@mui/material';


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  //console.log(gifUrl)

  const extraDetail = [
    {
      icon: {},
      name: bodyPart,
    },
    {
      icon: {},
      name: target,
    },
    {
      icon: {},
      name: equipment,
    },
  ]

  return (
    <Stack gap='80px' sx={{ flexDirection:{lg:'row'}, p:'30px', alignItems:'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack>
        <Typography>{name}</Typography>
        
        <Typography>
          Words are nice because they allow us to attach thoughts and meaning
          artifically and allow us to communicate verbally or abstract
        </Typography>

        { extraDetail?.map((item) => (
          <Stack key={item.name} direction='row' gap='25px' alignItems='center'>
            <Button>
              <img src={item.icon} alt={bodyPart} style={{ width:'50px', height:'50px'}} />
            </Button>
            <Typography textTransform='capitalize' sx={{ fontSize:{lg:'30px', xs:'20px'} }}>
              {item.name}
            </Typography>
          </Stack>
        ))}

      </Stack>
    </Stack>

  )
}

export default Detail