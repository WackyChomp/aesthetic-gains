import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);

  {/* test case dealing with undefine or not being populated */}
  if(!exerciseVideos.length) return 'Loading . .. ...';

  return (
    <Box sx={{ marginTop:{lg:'200px', xs:'20px'} }}>
      <Typography variant='h3' mb='35px'>
        Watch <span style={{color:'orangered', fontWeight:'bold', textTransform:'capitalize', textDecoration:'underline'}}>"{name}"</span> exercise videos:
      </Typography>

      <Stack justifyContent='flex' flexwrap='wrap' alignItems='center'
      sx={{ flexDirection:{lg:'row'}, gap:{lg:'110px', xs:'0'} }} >

        {/* loops through videos from useState in ExerciseDetail component to display */}
        {exerciseVideos?.slice(0, 4).map((item,index)=>(     // two videos go off screen
          <a key={index} className='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='blank' rel='noreferrer' >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box backgroundColor='black'>
              <Typography variant='h5' color='orangered'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='goldenrod'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos