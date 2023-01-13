import React from 'react';
import { Typography, Stack, Button } from '@mui/material';


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  //console.log(gifUrl)

  const bodyPartImage = 'https://img.icons8.com/ios/100/null/flex-biceps.png';
  const targetImage = 'https://img.icons8.com/ios/100/null/accuracy.png';
  const equipmentImage = 'https://img.icons8.com/ios/100/null/weightlift.png';


  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ]

  return (
    <Stack gap='80px' sx={{ flexDirection:{lg:'row'}, p:'30px', alignItems:'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack>
        <Typography variant='h3' textTransform='capitalize'>{name}</Typography>
        
        <Typography variant='h5'>
          The 🌟{name}🌟 will target the <b>{target}</b>.
          <br/><br/>Remember to always listen to your body to prevent injuries!
          <br/><br/>Words are nice because they allow us to attach thoughts and meaning
          artifically and allow us to communicate verbally or abstract
        </Typography>

        {/* loop icons with dynamic code block */}
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