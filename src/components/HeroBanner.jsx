import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
//import HeroBannerImage from '../assets/img/aesthetic-gains-logo.png'

const HeroBanner = () => {
  return (
    <Box
    sx={{ mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'} }}
    position='relative'
    p='20px'
    >
      <Typography color='orangered' fontWeight='600' fontSize='30px'>
      🌟Forge the body you deserve🌟
      </Typography>

      <Typography fontWeight='700' sx={{ fontSize:{ lg:'45px', xs:'40px'} }} mb='25px' mt='30px'>
        Conquer your physique<br/>
        Take back your life
      </Typography>

      <Typography fontSize='25px' lineHeight='35px' mb={3}>
        Discover new techniques for your routine
      </Typography>

      <Button href='#exercises' variant='contained' color='success' sx={{ backgroundColor:'orangered' }}>Explore</Button>

      <Typography
      fontWeight={600}
      color='orangered'
      sx={{
        opacity: 0.4,
        display: { lg:'block', xs:'none'}
      }}
      fontSize='200px'
      >
        Exercise
      </Typography>
      <img src='https://media.tenor.com/epNMHGvRyHcAAAAd/gigachad-chad.gif' className='hero-banner-img' alt="Peak Physique" />
    </Box>
  )
}

export default HeroBanner