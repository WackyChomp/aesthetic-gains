import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchAPIData';

const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const handleSearch = async ()=> {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exerciseData)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize:{ lg:'45px', xs:'30px' } }} mb='50px' textAlign='center'>
        Exercises For All Levels
      </Typography>

      <Box position='relative' mb='75px'>
        <TextField
          sx={{ input:{fontWeight:'700', border:'none', borderRadius:'10px'},
                width:{lg:'800px', xs:'400px'},
                backgroundColor:'gold',
                borderRadius:'40px'
          }}
          height='75px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Searching...'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor:'purple',
            color:'white',
            textTransform:'none',
            width: {lg:'175px', xs:'70px'},
            fontSize: {lg:'20px', xs:'14px'},
            height:'60px',
            position:'absolute',           // makes button next to search bar
            right: '0'
          }}
          onClick={handleSearch}
        >
          Click
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises