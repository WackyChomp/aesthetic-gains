import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


const LeftArrow = () =>{
  const { scrollPrev } = useContext(VisibilityContext);
  return(
    <Typography onClick={() => scrollPrev()} className='left-arrow'>
      <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-left.png" alt="left-arrow" />
    </Typography>
  )
}
const RightArrow = () =>{
  const { scrollNext } = useContext(VisibilityContext);
  return(
    <Typography onClick={() => scrollNext()} className='right-arrow'>
      <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-right.png" alt="right-arrow" />
    </Typography>
  )
}

// Display each category as cards
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={ item.id || item}
          itemId={ item.id || item}
          title={ item.id || item}
          m="0 40px">
            {/* <--- isBodyParts property calls SearchExercises component which has HorizontalScrollbar component */}
            {/* ExerciseCard will render similar exercises on ExerciseDetail Page*/}
            { isBodyParts
              ?
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
              :
              <ExerciseCard exercise={item} />
            }
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar