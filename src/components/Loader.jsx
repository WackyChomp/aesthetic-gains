import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

{/* Loading animation transition */}
const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
        <InfinitySpin color='orange' />
    </Stack>
  )
}

export default Loader