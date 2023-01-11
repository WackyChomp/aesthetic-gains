import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchAPIData';
import Detail from '../components/Detail';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();     // exercise associated to id number

  
  useEffect(() => {       // populates the useState
    const fetchExerciseData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
      console.log({exerciseDetailData});
      setExerciseDetail(exerciseDetailData);
    }

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default ExerciseDetail