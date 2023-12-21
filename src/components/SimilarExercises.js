import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" mb={5}>
                Exercises that target the same <span style={{ color: '#ff2625' }}>muscle group</span>:
            </Typography>
            <Stack direction="row" sx={{ p: '2px', position: 'relative' }}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>

            <Typography variant="h3" mt="100px" mb={5}>
                Exercises that use the same <span style={{ color: '#ff2625' }}>equipment</span>:
            </Typography>
            <Stack direction="row" sx={{ p: '2px', position: 'relative' }}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
