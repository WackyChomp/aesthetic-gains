import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/img/logo-orange-no-background2.svg';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='green'>
      <Stack gap='50px' alignItems='center' px='40px' pt='25px'>
        <img src={Logo} alt="Logo Here" width='100px' height='100px' />
        <Typography variant='6' pb='40px' mt='20px'>
          Copyright @ 2023 WC. All rights reserved
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer